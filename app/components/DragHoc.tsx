import React from 'react'
import { useDrag } from 'react-dnd'
type MyComponentProps = {
    children: React.ReactNode;
    type: string; // the type of the draggable item
    item: any; // the data that represents the draggable item
};

const DragHoc: React.FC<MyComponentProps> = ({children, type, item}) => {
  
    const [{ opacity }, dragRef] = useDrag(
        () => ({
          type: type,
          item: item,
          collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1
          })
        }),
        []
      )
  return (
    <div ref={dragRef} style={{opacity}}> {children} </div>
  )
}

export default DragHoc;