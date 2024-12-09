
import { FaPlayCircle } from "react-icons/fa";
import { CgSoftwareUpload } from "react-icons/cg";
import { BsQuestionSquare } from "react-icons/bs";
import { BsLayoutTextWindow } from "react-icons/bs";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { IoMdColorPalette } from "react-icons/io";
import { IoColorPaletteOutline } from "react-icons/io5";

import { RiStickyNoteLine } from "react-icons/ri";;
import { MdDelete } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa6";
import Layout1 from "./DiffLayouts/Layout1";
import Layout2 from "./DiffLayouts/Layout2";
import Layout3 from "./DiffLayouts/Layout3";
import Layout4 from "./DiffLayouts/Layout4";
import Layout5 from "./DiffLayouts/Layout5";
import { IoColorPalette } from "react-icons/io5";
import { action } from "~/routes/admin";
import { Link } from '@remix-run/react';
import DragHoc from "./DragHoc";
import { useDrop } from "react-dnd";
import { useEffect, useState } from "react";
import RenderLayout from "./RenderLayout";
type AnswerOption = {
  answer: string;
  isCorrect?: boolean;
};

type Question = {
  question: string;
  answerOptions: AnswerOption[];
};
const allquestion = [
  {
    "question": "What type of framework is Next.js?",
    "answerOptions": [
      {
        "answer": "Frontend"
      },
      {
        "answer": "Backend"
      },
      {
        "answer": "FullStack",
        "isCorrect": true
      },
      {
        "answer": "None of the above"
      }
    ]
  }

]

const AdminComp = () => {

  const [id, setId] = useState<number>(1);
  

  // Listen for changes to the id state
  useEffect(() => {
    if (id !== null) {
      // When the id changes, send a request to the action function
      fetch('/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      });
    }
  }, [id]);

  const [, drop] = useDrop(() => ({
    accept: 'card',  // This drop target only accepts items of type 'card'
    drop: (item, monitor) => handleDrop(item),
  }), []);

  function handleDrop(obj: any) {
    console.log("id", obj.id);
    setId(obj.id);


  }
  return (
    <div>
    <div className="mx-auto container grid grid-cols-10 p-1 border-r-2">



      {/* <!-- 1st side bar left menu --> */}
      <aside className="col-span-1 md:col-span-1 p-10 bg-gray-300 flex flex-col-reverse justify-center gap-8">
        <FaPlayCircle />
        <CgSoftwareUpload />
        <BsQuestionSquare />
        <BsLayoutTextWindow />
        <HiMiniSpeakerWave />


      </aside>

      {/* <!-- 2nd sidebar --> */}
      <aside className="col-span-1  h-100v  md:col-span-3 p-10 bg-white overflow-auto flex flex-wrap gap-3">
      
        <DragHoc type="card" item={{ id: 1}}><Layout1 allquestion={allquestion} /></DragHoc>
        
        <DragHoc type="card" item={{ id: 2 }}><Layout2 allquestion={allquestion} /></DragHoc>
        <DragHoc type="card" item={{ id: 3 }}><Layout3 allquestion={allquestion} /></DragHoc>

         <DragHoc type="card" item={{ id: 4 }}><Layout4 allquestion={allquestion} /></DragHoc>
        <DragHoc type="card" item={{ id: 5 }}><Layout5 allquestion={allquestion} /></DragHoc>
      </aside>

      
      {/* <!-- Main content --> */}
      <main className="col-span-5 md:col-span-6  p-10 bg-gray-300 relative" ref={drop}>
        {/* <!--Main Header section --> */}

        <div className=" min-h-10 rounded-md bg-white relative m-auto flex gap-3 justify-center items-center mb-2" >
          <button className="bg-gray-50 hover:bg-blue-700 text-bl font-bold py-1 px-3 rounded">
            Add Page Title
          </button>
          <IoMdColorPalette />
          <IoColorPaletteOutline />
          <IoColorPalette />
          <p>|</p>
          <button className="bg-gray-300 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
            Default
          </button>
          <button className="bg-gray-400 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
            Hover
          </button>
          <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
            Clicked
          </button>
          <p>|</p>
          <FaRegCopy />
          <MdDelete />
          <RiStickyNoteLine />

        </div>


        {RenderLayout(id)}

          

       
        <div className="max-w-44 min-h-10 rounded-md bg-white flex justify-center items-center gap-5  relative right-0 mt-2" >
          <FaPlayCircle />
          <CgSoftwareUpload />
          <BsQuestionSquare />
          <BsLayoutTextWindow />
          <HiMiniSpeakerWave />


        </div>

      </main>



    </div>
    </div>
  )
}
export default AdminComp;