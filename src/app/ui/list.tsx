'use client'
import { title} from "../lib/data";
import { useEffect, useState } from "react";

export default function List(){
  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      handleResize();
    
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    
  }, []);
  if(width > 1200){
    const listTitle = title.map((title, index) => {
      return <li key={index} className=" hover:underline "><a href="" >{title}</a></li>
    });
    return <ul className="flex space-x-4   ">{listTitle}</ul>;
  }else if(width <= 1200 && width > 768){
    return (
      <div className="flex space-x-4">
       <ul  className="flex space-x-4">
        <li><a key={1} href="">Microsoft</a></li>
        <li><a key={2} href="">Teams</a></li>
        <li><a key={3} href="">Copilot</a></li>
        <li><a key={4} href="">Windows</a></li>
       </ul>
      <button>More<svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-3 " id="icon-arrow-down" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg></button>
      </div>
    );
  }else{
    return (
     null
    );
  }
}