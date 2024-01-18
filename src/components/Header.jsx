import React from "react";

const Header = ({ isShowHeader, setIsShowHeader, handleChangeTheme }) => {
   return (
      <header className="fixed right-0 h-full w-20 sm:h-auto sm:w-full sm:bg-content-1 sm:shadow-md">
         <section className="flex text-textColor sm:flex-row sm:p-4 items-center justify-between sm:mx-3 sm:gap-0 ">
            <h2 className="font-extrabold  hidden sm:text-4xl sm:flex">FP</h2>

            <section className="sm:text-xl font-semibold  sm:flex">
               {/* //!Boton Hamburguesa */}
               <button
                  onClick={() => setIsShowHeader(!isShowHeader)}
                  className="w-[50px] sm:hidden"
               >
                  <img src="/images/icons/HamburgerIcon.png" alt="" />
               </button>

               <div
                  className={`fixed  backdrop-blur-2xl sm:static  w-[170px] bottom-0 sm:w-full top-11 sm:top-0   sm:bg-inherit p-5 sm:p-0 gap-2  transition-[right] ${
                     isShowHeader ? "-right-3" : "-right-[300px]"
                  }`}
               >
                  <ul className="flex flex-col h-full  sm:flex-row gap-8 sm:gap-4 ">
                     <li>
                        {/* //!Day/Light */}
                        <button
                           className="p-2 hover:text-bkg dark:hover:text-black dark:text-content-3"
                           onClick={handleChangeTheme}
                        >
                           <svg
                              class="w-9 h-7 "
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 20"
                           >
                              <path
                                 stroke="currentColor"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                              />
                           </svg>
                        </button>
                     </li>
                     <li className="transition-colors sm:p-2 dark:text-content-3 hover:text-bkg">
                        <a href="#home">Home</a>
                     </li>
                     <li className="transition-colors  sm:p-2 dark:text-content-3 hover:text-bkg">
                        <a href="#skills">Habilidades</a>
                     </li>
                     <li className="transition-colors  sm:p-2 dark:text-content-3 hover:text-bkg">
                        <a href="#projects">Proyectos</a>
                     </li>
                     <li className="transition-colors  sm:p-2 dark:text-content-3 hover:text-bkg">
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
