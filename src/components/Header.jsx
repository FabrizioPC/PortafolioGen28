import React from "react";

const Header = ({ isShowHeader, setIsShowHeader }) => {
   return (
      <header className="fixed w-full bg-blue-500">
         <section className="flex p-3  items-center justify-between sm:mx-3 sm:gap-0 ">
            <h2 className="font-bold">Fabrizio.P</h2>
            <section className="relative ">
               <button
                  onClick={() => setIsShowHeader(!isShowHeader)}
                  className="w-[30px] sm:hidden"
               >
                  <img src="/images/icons/HamburgerIcon.png" alt="" />
               </button>
               <div
                  className={`absolute  sm:static  w-[170px] sm:w-full top-12 sm:top-0  bg-blue-500 sm:bg-inherit p-5 sm:p-0 gap-2  transition-[right] ${
                     isShowHeader ? "-right-0" : "-right-[300px]"
                  }`}
               >
                  <ul className="flex flex-col sm:flex-row gap-4 ">
                     <li className="transition-colors sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-blue-500">
                        <a href="#home">Home</a>
                     </li>
                     <li className="transition-colors sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-blue-500">
                        <a href="#skills">Habilidades</a>
                     </li>
                     <li className="transition-colors sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-blue-500">
                        <a href="#projects">Proyectos</a>
                     </li>
                     <li className="transition-colors sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-blue-500">
                        <a href="#contact">Contactame</a>
                     </li>
                  </ul>
               </div>
            </section>
         </section>
      </header>
   );
};

export default Header;
