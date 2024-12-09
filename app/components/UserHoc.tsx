import { Link } from '@remix-run/react';
import React from 'react'
type MyComponentProps = {
    children: React.ReactNode;
   
};
const UserHoc: React.FC<MyComponentProps> = ({children}) => {
  return (
    <div className="flex  w-screen px-5 m-auto mt-4 bg-orange-300 justify-center gap-4 items-center">

    <div >
        {children}
 </div>
 <Link to='/' type="button" className="text-gray-900 px-5 py-4 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none text-2xl focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg  text-center me-2 mb-2">Go To Home Page</Link>
 </div>
  )
}

export default UserHoc