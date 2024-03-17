import React, { useState, useEffect } from "react";
import { carousel } from "../lib/data";


export default function Carousel(){
  const [currentIndex, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false)
  
  
  useEffect(() => {
    const interval = setInterval( () => {
      if(!isHovering && !isClicked){
        setIndex((currentIndex + 1) % carousel.length);
      }
    }, 3000);
    return ()=> clearInterval(interval);
  }, [currentIndex, isHovering, isClicked]);
  
 
  function handleNext(){
    if(currentIndex != carousel.length -1){
      setIndex(currentIndex+1);
    }else{
      setIndex(0);
    }
  }
  function handlePrevious(){
    if(currentIndex != 0){
      setIndex(currentIndex - 1);
    }else{
      setIndex(carousel.length - 1);
    }
  }

  
  
  return(
    <div className="relative" > 
      <img key={currentIndex} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} src={carousel[currentIndex].url} className={` w-full h-full ${currentIndex === currentIndex ? "block" : "hidden"}`} alt={`Slide ${currentIndex + 1}`} />
      <div className={`lg:absolute left-20 top-20 p-8 lg:h-1/2 lg:w-1/3 w-full text-wrap ${currentIndex == 0 ? 'bg-white':'bg-inherit'}`}>
          <h1 className="font-medium text-4xl">{carousel[currentIndex].title}</h1>
          <p className="mt-4 mb-4">{carousel[currentIndex].content}</p>
          <button className="bg-blue-800 text-white "><p className="m-4">{carousel[currentIndex].link_button}</p></button>
      </div>
      <div className="flex justify-center items-center">
        <button onClick={() => setIsClicked(!isClicked)} className={`border-slate-300 ${isClicked? 'border-dashed' : 'border-white'}`}>
        {isClicked ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
        
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
         </svg>


        )}
       </button>
        <button onClick={handlePrevious} className="hover:pl-2">&#5176;</button>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"  viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="fill-blue"  viewBox="0 0 16 16">
         <circle cx="8" cy="8" r="8"/>
        </svg>
        

        <button onClick={handleNext}>&#5171;</button>
      </div>
      
      
    </div>
  );
}