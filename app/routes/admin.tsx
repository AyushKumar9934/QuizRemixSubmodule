import AdminComp from "~/components/AdminComp"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { setLayout } from "~/data/adminSetLayoutFetch"
import { redirect } from "@remix-run/react"

const admin = () => {
  return (
    <DndProvider backend={HTML5Backend}>
    <AdminComp />
    </DndProvider>
  )
}

export async function action({ request }: { request: Request }){
  const currLayoutIndex=await request.json();
  //console.log("request coming from frontend is ",currLayoutIndex)
    // const dropData=await request.
    await setLayout(currLayoutIndex.id)
    return {
      message:"set Layout correctly"
    }

}
export default admin