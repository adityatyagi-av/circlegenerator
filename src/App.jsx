import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [circle,setCircle]=useState([])
  
  //function to check the overlapping
  const overlappingCircles= (circle1,circle2)=>{
    const x=circle1.x-circle2.x;
    const y=circle1.y-circle2.y;
    console.log(circle1.x,circle1.y);
    console.log(circle2.x,circle2.y);
    console.log(Math.sqrt(x*x+y*y))
    
    const distance=Math.sqrt(x*x+y*y)
    if(distance<circle1.circleRadius+circle2.circleRadius){
      return true;
    }
    return false;
  }
  
  //function to generate the circles
  const handleClick=(e)=>{
   const canva=e.target;

   //positions of canva
   const canvaPositions=canva.getBoundingClientRect();

  

   //random radius and color 
   const circleRadius=50;
   const circleColor=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
   const x=e.clientX -canvaPositions.left;
   const y=e.clientY-canvaPositions.y;

   const circleDesign={circleColor,circleRadius,x,y}
   
   if(circle.length===0){
    setCircle([circleDesign])
   }
   circle.forEach((item,index)=>{
    if(overlappingCircles(item,circleDesign)){
      circleDesign.circleColor="red"
    }
   })
    setCircle([...circle,circleDesign])

  }
  return (

    <>
  
    <div className='canva' onClick={handleClick}>
      {circle?.map((item,index)=>(
        <div key={index} className='circle' style={{
  left:item.x-item.circleRadius,
  top:item.y-item.circleRadius,
  width:item.circleRadius,
  height:item.circleRadius,
  backgroundColor:item.circleColor,
}}>
  </div>
      ))}
     



    </div>
    </>
  )
}

export default App