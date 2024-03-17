import Image from "next/image";
import List from "./list";
import { useState } from "react";
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isInputVisible, setInputVisible] = useState(false);

  const handleShowInput = () => {
    setInputVisible(true);
  };

  const handleHideInput = () => {
    setInputVisible(false);
  };
  return (
    <>
      {!isInputVisible && (
        <>
          <div className="hidden  md:flex flex-row  text-sm items-center self-stretch">
            <a href="" className=" mr-4 "><Image
              src="/MicrosoftLogo.png"
              alt="Microsoft Logo"
              height={21}
              width={110}
            /></a>
            <List />
          </div>
          <div className="hidden md:flex flex-row-reverse space-x-4 space-x-reverse text-sm  items-center  h-full">
            <div className="flex">
              <Link href="/login" className="hidden lg:block">Sign in</Link>
               <img src="/person-plus-svgrepo-com.svg" className="w-5 h-5" alt="" />
             </div>
            <div className="flex">
              <Link href="/cart" className="hidden lg:block">Cart</Link>
              <img src="/shopping-cart-outline-svgrepo-com.svg" className="w-5 h-5" alt="" />
            </div>
            <div className="flex">

              <button className="hidden lg:block hover:underline active:outline-slate-400 active:outline-dashed active:bg-slate-300 " onClick={handleShowInput} >Search</button>
              <img src="/magnifier-glass-icon.png" className="w-4 h-4 hidden lg:block" alt="" />
              <button className="lg:hidden" onClick={handleShowInput}><img src="/magnifier-glass-icon.png" className="w-4 h-4" alt="" /></button>
            </div>

            <div className=" hidden lg:block  ">
              <button onClick={toggleDropdown} className={`relative hover:underline active:outline-slate-400 active:outline-dashed ${isOpen ? 'bg-slate-300' : 'bg-transparent'}`}>All Microsoft<svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-3 " id="icon-arrow-down" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg></button>

              <div className={`fixed z-50 -right-4 ${isOpen ? 'block' : 'hidden'} bg-slate-300 opacity-100 w-2/3`}>
                <ul className={`flex `}>
                  <li>
                    <ul className="text-sm leading-9 ">
                      <li>
                        <h6 className="font-medium">What's new</h6>
                      </li>
                      <li><a href="">Surface Pro 9</a></li>
                      <li><a href="">Surface Laptop 5</a></li>
                      <li><a href="">Surface Studio 2+</a></li>
                      <li><a href="">Surface Laptop Go 2</a></li>
                      <li><a href="">Surface Laptop Studio</a></li>
                      <li><a href="">Microsoft 365</a></li>
                      <li><a href="">Windows 11 apps</a></li>
                    </ul>
                  </li>
                  <li>
                    <ul className="text-sm leading-9">
                      <li>
                        <h6 className="font-medium">Microsoft Store</h6>
                      </li>
                      <li><a href="">Account profile</a></li>
                      <li><a href="">Download Center</a></li>
                      <li><a href="">Microsoft Store Support</a></li>
                      <li><a href="">Returns</a></li>
                      <li><a href="">Order tracking</a></li>
                      <li><a href="">Microsoft Store Promise</a></li>
                    </ul>
                  </li>
                  <li>
                    <ul className="text-sm leading-9">
                      <li>
                        <h6 className="font-medium">Education</h6>
                      </li>
                      <li><a href="">Microsoft in education</a></li>
                      <li><a href="">Devices for education</a></li>
                      <li><a href="">Microsoft Teams for Education</a></li>
                      <li><a href="">Microsoft 365 Education</a></li>
                      <li><a href="">Office Education</a></li>
                      <li><a href="">Educator training and development</a></li>
                      <li><a href="">Deals for students and parents</a></li>
                      <li><a href="">Azure for students</a></li>
                    </ul>
                  </li>
                  <li>
                    <ul className="text-sm leading-9">
                      <li>
                        <h6 className="font-medium">Business</h6>
                      </li>
                      <li><a href="">Microsoft Cloud</a></li>
                      <li><a href="">Microsoft Security</a></li>
                      <li><a href="">Azure</a></li>
                      <li><a href="">Dynamics 365</a></li>
                      <li><a href="">Microsoft 365</a></li>
                      <li><a href="">Microsoft Advertising</a></li>
                      <li><a href="">Microsoft Industry</a></li>
                      <li><a href="">Microsoft Teams</a></li>
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
                <div className="border-t border-slate-800 text-center"><a href="">More &#5171;</a></div>
              </div>
            </div>
          </div>



          <div className="md:hidden flex justify-between w-full">
            <div className="relative flex w-1/12 justify-between">
              <button className="" onClick={() => setIsOpen(!isOpen)}>{isOpen ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
              )}</button>
              <ul className={`absolute z-50  top-6 ${isOpen ? 'block' : 'hidden'} bg-slate-300 opacity-100 w-screen leading-10 `}>
                <li>Microsoft365</li>
                <li>Teams</li>
                <li>Copilot</li>
                <li>Windows</li>
                <li>Surface</li>
                <li>Xbox</li>
                <li>Sale</li>
                <li>Small Business</li>
                <li>Support</li>
              </ul>
              <button className="lg:hidden" onClick={handleShowInput}><img src="/magnifier-glass-icon.png" className="w-4 h-4" alt="" /></button>
            </div>
            <a href="" className=" mr-4 "><Image
              src="/MicrosoftLogo.png"
              alt="Microsoft Logo"
              height={21}
              width={110}
            /></a>
            <div className="flex w-1/12 justify-between">
              <img src="/person-plus-svgrepo-com.svg" className="w-5 h-5" alt="" />
              <img src="/shopping-cart-outline-svgrepo-com.svg" className="w-5 h-5" alt="" />
            </div>
          </div>
        </>
      )}
      {isInputVisible && (
        <>
          <div className=" hidden md:flex md:flex-row  md:text-sm md:items-center md:self-stretch">
            <a href="" className="mr-4"><Image
              src="/MicrosoftLogo.png"
              alt="Microsoft Logo"
              height={21}
              width={110}
            /></a>

          </div>
          <div className=" grow relative flex ">
            <button onClick={handleHideInput} className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
            </button>
            <input
              type="text"
              className="w-full p-2 bg-[url('/magnifier-glass-icon.png')] bg-contain bg-no-repeat bg-right"
              placeholder="Search Microsoft.com"
            />

            <button onClick={handleHideInput} className="hidden md:block border-solid border-2 border-slate-600">Cancel</button>
          </div>
        </>
      )}
    </>
  );
}