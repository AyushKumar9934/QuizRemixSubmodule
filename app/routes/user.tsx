import { useLoaderData } from "@remix-run/react";
import Layout1 from "~/components/DiffLayouts/Layout1";
import Layout2 from "~/components/DiffLayouts/Layout2";
import Layout3 from "~/components/DiffLayouts/Layout3";
import Layout4 from "~/components/DiffLayouts/Layout4";
import Layout5 from "~/components/DiffLayouts/Layout5";
import UserHoc from "~/components/UserHoc";
import { getStoredLayout } from "~/data/adminSetLayoutFetch"
import { getAllQuestion } from "~/data/getQuestions";
type AnswerOption = {
  answer: string;
  isCorrect?: boolean;
};

type Question = {
  question: string;
  answerOptions: AnswerOption[];
};

type Quiz = {
  currentLayout: number;
  allQues: Question[];
};


const user = () => {
 const requiredData:Quiz= useLoaderData();//getting current Index from the backed 
 let allquestion:Question[]=requiredData.allQues;

 switch(requiredData.currentLayout){
  case 1:
      return <UserHoc><Layout1 allquestion={allquestion} /></UserHoc> 
  case 2:
    return <UserHoc><Layout2 allquestion={allquestion} /></UserHoc>
  case 3:
    return <UserHoc><Layout3 allquestion={allquestion} /></UserHoc>
  case 4:
    return <UserHoc><Layout4 allquestion={allquestion} /></UserHoc>
  case 5:
    return <UserHoc><Layout5 allquestion={allquestion} /></UserHoc>
  default:
    return <UserHoc><Layout1 allquestion={allquestion} /></UserHoc>
 }
  
}
export async function loader(){
  const currentLayout=await getStoredLayout();
  const allQues=await getAllQuestion();
  return {currentLayout,allQues};   //loader return response it is like sending new Response from backend to frontend 
}
export default user