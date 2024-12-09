import Layout1 from "./DiffLayouts/Layout1";
import Layout2 from "./DiffLayouts/Layout2";
import Layout3 from "./DiffLayouts/Layout3";
import Layout4 from "./DiffLayouts/Layout4";
import Layout5 from "./DiffLayouts/Layout5";


import React from 'react'

const allLayout = () => {
    let layoutArr=[Layout1,Layout2,Layout3,Layout4,Layout5];
  return (
    <div>{layoutArr.map((currLayout)=><currLayout/>)}</div>
  )
}

export default allLayout