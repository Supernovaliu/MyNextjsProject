import { small_card } from "../lib/data";

export default function Cards1(){
  return (
    <div className="flex  justify-center mb-12">
      <ul className="flex flex-wrap h-24 w-4/5 justify-between">
        {small_card.map((card,index) => {
          return <li className="flex flex-col h-full items-center justify-center" key={index}><img className="h-1/2 " src={card.url} alt="" /><a className="h-1/2  text-sky-700 underline" href="">{card.link_title}</a></li>
        })}
      </ul>
    </div>
  );
}