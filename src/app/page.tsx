'use client'

import NavBar from "./ui/navBar";
import Carousel from "./ui/carousel";
import Cards1 from "./ui/cards1";
import Cards2 from "./ui/cards2";
import Card3 from "./ui/cards3";


export default function Home() {
  
  return (
    <main className=" ">
      <div className="flex  justify-between  items-center mr-6 ml-6 h-16">
        <NavBar/>
      </div>
      <Carousel/>
      <Cards1/>
      <Cards2/>
      <div className="relative p-6">
        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Laptop-Go-3-CONS-M001-1:VP5-1596x600" alt="" />
        <div className="lg:absolute left-24 top-24 p-8 lg:h-1/2 lg:w-1/3 text-wrap">
          <h1 className="font-medium text-4xl">Surface Laptop</h1>
          <p className="mt-4 mb-4">An ultraportable, everyday laptop with the performance and battery life you need to get it all done.</p>
          <button className="bg-blue-800 text-white ">Shop now</button>
        </div>
      </div>
      <h1 className="p-6 font-medium text-4xl">For Business</h1>
      <Card3/>
      <div className="flex items-center">
        <p>Follow Microsoft</p>
        <a href="" className="active:border-sky-300 active:border-dashed p-1"><img className="w-1/2 h-1/2" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Facebook%202x?scl=1" alt="" /></a>
        <a href=""><img className="w-1/2 h-1/2" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-MSCOM-X-64x64?scl=1" alt="" /></a>
      </div>
      <div className="sticky bottom-0 flex justify-end">
        <a
        href="#"
        className="bg-slate-200 text-black p-2  m-4"
        >
        Back to Top
        </a>
        
      </div>
    <footer>
    <ul className={` flex flex-wrap bg-slate-300 justify-between p-6`}>
              <li>
              <ul className="text-sm leading-9">
                  <li>
                    <h6 className="font-medium">What's new</h6>
                  </li>
                  <li><a className="hover:underline" href="">Surface Pro 9</a></li>
                  <li><a className="hover:underline" href="">Surface Laptop 5</a></li>
                  <li><a className="hover:underline" href="">Surface Studio 2+</a></li>
                  <li><a className="hover:underline" href="">Surface Laptop Go 2</a></li>
                  <li><a className="hover:underline" href="">Surface Laptop Studio</a></li>
                  <li><a className="hover:underline" href="">Microsoft 365</a></li>
                  <li><a className="hover:underline" href="">Windows 11 apps</a></li>
                </ul>
              </li>
              <li>
              <ul className="text-sm leading-9">
                  <li>
                    <h6 className="font-medium">Microsoft Store</h6>
                  </li>
                  <li><a className="hover:underline" href="">Account profile</a></li>
                  <li><a className="hover:underline" href="">Download Center</a></li>
                  <li><a className="hover:underline" href="">Microsoft Store Support</a></li>
                  <li><a className="hover:underline" href="">Returns</a></li>
                  <li><a className="hover:underline" href="">Order tracking</a></li>
                  <li><a className="hover:underline" href="">Microsoft Store Promise</a></li>
                </ul>
              </li>
              <li>
               <ul className="text-sm leading-9">
                  <li>
                    <h6 className="font-medium">Education</h6>
                  </li>
                  <li><a className="hover:underline" href="">Microsoft in education</a></li>
                  <li><a className="hover:underline" href="">Devices for education</a></li>
                  <li><a className="hover:underline" href="">Microsoft Teams for Education</a></li>
                  <li><a className="hover:underline" href="">Microsoft 365 Education</a></li>
                  <li><a className="hover:underline" href="">Office Education</a></li>
                  <li><a className="hover:underline" href="">Educator training and development</a></li>
                  <li><a className="hover:underline" href="">Deals for students and parents</a></li>
                  <li><a className="hover:underline" href="">Azure for students</a></li>
                </ul>
              </li>
              <li>
               <ul className="text-sm leading-9">
                  <li>
                    <h6 className="font-medium">Business</h6>
                  </li>
                  <li><a className="hover:underline" href="">Microsoft Cloud</a></li>
                  <li><a className="hover:underline" href="">Microsoft Security</a></li>
                  <li><a className="hover:underline" href="">Azure</a></li>
                  <li><a className="hover:underline" href="">Dynamics 365</a></li>
                  <li><a className="hover:underline" href="">Microsoft 365</a></li>
                  <li><a className="hover:underline" href="">Microsoft Advertising</a></li>
                  <li><a className="hover:underline" href="">Microsoft Industry</a></li>
                  <li><a className="hover:underline" href="">Microsoft Teams</a></li>
                </ul>
              </li>
              <li>
                <ul className="text-sm leading-9">
                  <li>
                    <h6 className="font-medium">Developer & IT</h6>
                  </li>
                  <li><a className="hover:underline" href="">Developer Center</a></li>
                  <li><a className="hover:underline" href="">Documentation</a></li>
                  <li><a className="hover:underline" href="">Microsoft Learn</a></li>
                  <li><a className="hover:underline" href="">Microsoft Tech Community</a></li>
                  <li><a className="hover:underline" href="">Azure Marketplace</a></li>
                  <li><a className="hover:underline" href="">AppSource</a></li>
                  <li><a className="hover:underline" href="">Microsoft Power Platform</a></li>
                  <li><a className="hover:underline" href="">Visual Studio</a></li>
                </ul>
              </li>
              <li>
                <ul className="text-sm leading-9">
                  <li>
                    <h6 className="font-medium">Company</h6>
                  </li>
                  <li><a className="hover:underline" href="">Careers</a></li>
                  <li><a className="hover:underline" href="">Company news</a></li>
                  <li><a className="hover:underline" href="">Privacy at Microsoft</a></li>
                  <li><a className="hover:underline" href="">Investors</a></li>
                  <li><a className="hover:underline" href="">Sustainability</a></li>
                </ul>
              </li>
            </ul>
    </footer>

     
    </main>
  );
}
