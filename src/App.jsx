import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [circle,setCircle]=useState([])
  
  const handleClear=()=>{
    setCircle([])
  }
  //function to check the overlapping
  const overlappingCircles= (circle1,circle2)=>{
    const x=circle1.x-circle2.x;
    const y=circle1.y-circle2.y;
    
    const distance=Math.sqrt(x*x+y*y)
    const l=(circle1.circleRadius+circle2.circleRadius)/2
    console.log(distance + " " +l)
    if(distance<l){
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
   const circleColor="red" 
  //  console.log(e.clientX + " " + e.clientY)
   const x=e.clientX -canvaPositions.left;
   const y=e.clientY-canvaPositions.y;
  //  console.log(x + " " + y)
  

   const circleDesign={circleColor,circleRadius,x,y }
   
   if(circle.length===0){
    setCircle([circleDesign])
   }


   circle.forEach((item,index)=>{
    if(overlappingCircles(item,circleDesign)){
      circleDesign.circleColor=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
    }
   })
    setCircle([...circle,circleDesign])

  }
  return (

    <>
  
    <div className='canva' onClick={handleClick}>
      {circle?.map((item,index)=>(
        <div key={index} className='circle' style={{
  left:item.x-item.circleRadius/2,
  top:item.y-item.circleRadius/2,
  width:item.circleRadius,
  height:item.circleRadius,
  backgroundColor:item.circleColor,
}}>
  </div>
      ))}
     



    </div>
    <button onClick={handleClear}>Clear</button>
    </>
  )
}

export default App