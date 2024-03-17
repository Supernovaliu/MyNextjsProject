import { cards } from "../lib/data";
export default function Cards2(){
  const cards_before = cards.filter((_, index) => index<= 3);
  return(
    <div className="grid lg:grid-cols-4 md:max-lg:grid-cols-2 grid-cols-1 gap-x-6 p-6 lg:h-[36rem]">
      {cards_before.map((card, index) => {
        return (
          <div key={index} className="shadow-md place-items-stretch ">
            <img src={card.url} alt="" className="w-full" />
            <div className="p-4 flex flex-col justify-between lg:h-3/5">
              <h1 className="font-medium text-2xl">{card.title}</h1>
              <p>{card.content}</p>
              <a href="" className="bg-blue-700 text-white w-2/3 p-2 text-center">{card.link_title}</a>
              {index === 1? <div className="group text-cyan-600"><a href="" className="group-hover:underline">For up to six people </a><span className="group-hover:ml-2">&#5171;</span></div> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}