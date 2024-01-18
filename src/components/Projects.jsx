import React from "react";

import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
   return (
      <section
         id="projects"
         className=" m-5 w-[90%] mx-auto  pb-3 text-textColor"
      >
         <h2 className="text-3xl text-center p-3 font-semibold">
            Mis Proyectos:
         </h2>

         <div className="galeria  flex justify-center flex-wrap mt-5 text-white">
            <div className="card  shadow-xl w-[325px] bg-content-2 sm:bg-content-2 rounded-[8px] overflow-hidden shadow-[0px 2px 4px rgba(0,0,0,0.2) m-[20px] mb-auto">
               <div className="image  w-full  h-auto">
                  <img
                     className="cursor-pointer w-full"
                     src="/images/projects/RickMorty.jpg"
                     alt=""
                  />
               </div>
               <div className="card-content p-[16px] text-[28px] mb-[8px]">
                  <h2 className="font-semibold text-xl">Rick&Morty</h2>

                  <div className="card-links flex justify-center">
                     <div className="card-link flex">
                        <a
                           href="https://github.com/FabrizioPC/RickAndMorty"
                           target="_blank"
                        >
                           <section className="sm:p-4 border border-yellow-200/0 rounded-full hover:border hover:border-yellow-200">
                              <div className="h-[25px] aspect-square">
                                 <img
                                    className="h-full w-full object-contain"
                                    src="/images/icons/githubLogo.png"
                                    alt=""
                                 />
                              </div>
                           </section>
                        </a>
                        <a
                           href="https://rickandmortyfpgen28.netlify.app"
                           target="blank"
                        >
                           <section className="sm:p-4 border border-yellow-200/0 rounded-full hover:border hover:border-yellow-200">
                              <div className="h-[25px] aspect-square">
                                 <img
                                    className="h-full w-full object-contain"
                                    src="/images/icons/netlifyIcon.png"
                                    alt=""
                                 />
                              </div>
                           </section>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="card  shadow-xl w-[325px] bg-content-2 sm:bg-content-2 rounded-[8px] overflow-hidden shadow-[0px 2px 4px rgba(0,0,0,0.2) m-[20px] mb-auto">
               <div className="image  w-full  h-auto">
                  <img
                     className="cursor-pointer w-full"
                     src="/images/projects/Ecommerce.jpg"
                     alt=""
                  />
               </div>

               <div className="card-content p-[16px] text-[28px] mb-[8px]">
                  <h2 className="font-semibold text-xl">Ecommerce</h2>

                  <div className="card-links flex justify-center">
                     <div className="card-link flex">
                        <a
                           href="https://github.com/FabrizioPC/ProyectoEcommerceGen28"
                           target="_blank"
                        >
                           <section className="sm:p-4 border border-yellow-200/0 rounded-full hover:border hover:border-yellow-200">
                              <div className="h-[25px] aspect-square">
                                 <img
                                    className="h-full w-full object-contain"
                                    src="/images/icons/githubLogo.png"
                                    alt=""
                                 />
                              </div>
                           </section>
                        </a>
                        <a
                           href="https://ecommercefabriziopgen28.netlify.app"
                           target="_blank"
                        >
                           <section className="sm:p-4 border border-yellow-200/0 rounded-full hover:border hover:border-yellow-200">
                              <div className="h-[25px] aspect-square">
                                 <img
                                    className="h-full w-full object-contain"
                                    src="/images/icons/netlifyIcon.png"
                                    alt=""
                                 />
                              </div>
                           </section>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="card  shadow-xl w-[325px] bg-content-2 sm:bg-content-2 rounded-[8px] overflow-hidden shadow-[0px 2px 4px rgba(0,0,0,0.2) m-[20px] mb-auto">
               <div className="image w-full  h-auto">
                  <img
                     className="cursor-pointer w-full"
                     src="/images/projects/Pokedex.jpg"
                     alt=""
                  />
               </div>
               <div className="card-content p-[16px] text-[28px] mb-[8px]">
                  <h2 className="font-semibold text-xl">Pokedex</h2>
                  <div className="card-links flex justify-center">
                     <div className="card-link flex">
                        <a
                           href="https://github.com/FabrizioPC/PokedexApp"
                           target="_blank"
                        >
                           <section className="sm:p-4 border border-yellow-200/0 rounded-full hover:border hover:border-yellow-200">
                              <div className="h-[25px] aspect-square">
                                 <img
                                    className="h-full w-full object-contain"
                                    src="/images/icons/githubLogo.png"
                                    alt=""
                                 />
                              </div>
                           </section>
                        </a>
                        <a
                           href="https://pokedexappfpgen28.netlify.app"
                           target="_blank"
                        >
                           <section className="sm:p-4 border border-yellow-200/0 rounded-full hover:border hover:border-yellow-200">
                              <div className="h-[25px] aspect-square">
                                 <img
                                    className="h-full w-full object-contain"
                                    src="/images/icons/netlifyIcon.png"
                                    alt=""
                                 />
                              </div>
                           </section>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="card  shadow-xl w-[325px] bg-content-2 sm:bg-content-2 rounded-[8px] overflow-hidden shadow-[0px 2px 4px rgba(0,0,0,0.2) m-[20px] mb-auto">
               <div className="image w-full  h-auto">
                  <img
                     className="min-h-[203.13px] cursor-pointer w-full"
                     src="/images/projects/WeatherApp.png"
                     alt=""
                  />
               </div>
               <div className="card-content p-[16px] text-[28px] mb-[8px]">
                  <h2 className="font-semibold text-xl">WeatherApp</h2>
                  <div className="card-links flex justify-center">
                     <div className="card-link flex">
                        <a
                           href="https://github.com/FabrizioPC/WeatherPage"
                           target="_blank"
                        >
                           <section className="sm:p-4 border border-yellow-200/0 rounded-full hover:border hover:border-yellow-200">
                              <div className="h-[25px] aspect-square">
                                 <img
                                    className="h-full w-full object-contain"
                                    src="/images/icons/githubLogo.png"
                                    alt=""
                                 />
                              </div>
                           </section>
                        </a>
                        <a
                           href="https://weatherappfp28gen.netlify.app"
                           target="_blank"
                        >
                           <section className="sm:p-4 border border-yellow-200/0 rounded-full hover:border hover:border-yellow-200">
                              <div className="h-[25px] aspect-square">
                                 <img
                                    className="h-full w-full object-contain"
                                    src="/images/icons/netlifyIcon.png"
                                    alt=""
                                 />
                              </div>
                           </section>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="card  shadow-xl w-[325px] bg-content-2 sm:bg-content-2 rounded-[8px] overflow-hidden shadow-[0px 2px 4px rgba(0,0,0,0.2) m-[20px] mb-auto">
               <div className="image w-full  h-auto">
                  <img
                     className="cursor-pointer min-h-[203.13px] max-h-[203.13px] w-full"
                     src="/images/projects/RatingFrontMentor.png"
                     alt=""
                  />
               </div>

               <div className="card-content p-[16px] text-[28px] mb-[8px]">
                  <h2 className="font-semibold text-xl">Rating(FrontMentor)</h2>

                  <div className="card-links flex justify-center">
                     <div className="card-link flex">
                        <a
                           href="https://github.com/FabrizioPC/proyectosFrontMentor/tree/main/interactive-rating-component-main"
                           target="_blank"
                        >
                           <section className="sm:p-4 border border-yellow-200/0 rounded-full hover:border hover:border-yellow-200">
                              <div className="h-[25px] aspect-square">
                                 <img
                                    className="h-full w-full object-contain"
                                    src="/images/icons/githubLogo.png"
                                    alt=""
                                 />
                              </div>
                           </section>
                        </a>
                        <a
                           href="https://proyectosfrontmentorfp.netlify.app/interactive-rating-component-main/"
                           target="_blank"
                        >
                           <section className="sm:p-4 border border-yellow-200/0 rounded-full hover:border hover:border-yellow-200">
                              <div className="h-[25px] aspect-square">
                                 <img
                                    className="h-full w-full object-contain"
                                    src="/images/icons/netlifyIcon.png"
                                    alt=""
                                 />
                              </div>
                           </section>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="card  shadow-xl w-[325px] bg-content-2 sm:bg-content-2 rounded-[8px] overflow-hidden shadow-[0px 2px 4px rgba(0,0,0,0.2) m-[20px] mb-auto">
               <div className="image w-full  h-auto">
                  <img
                     className="cursor-pointer min-h-[203.13px] w-full"
                     src="/images/projects/InfoGalax.jpg"
                     alt=""
                  />
               </div>

               <div className="card-content p-[16px] text-[28px] mb-[8px]">
                  <h2 className="font-semibold text-xl">InfoGalax</h2>

                  <div className="card-links flex justify-center">
                     <div className="card-link flex">
                        <a
                           href="https://github.com/FabrizioPC/InfoGalaxFP"
                           target="_blank"
                        >
                           <section className="sm:p-4 border border-yellow-200/0 rounded-full hover:border hover:border-yellow-200">
                              <div className="h-[25px] aspect-square">
                                 <img
                                    className="h-full w-full object-contain"
                                    src="/images/icons/githubLogo.png"
                                    alt=""
                                 />
                              </div>
                           </section>
                        </a>
                        <a
                           href="https://infogalaxfpgen28.netlify.app"
                           target="_blank"
                        >
                           <section className="sm:p-4 border border-yellow-200/0 rounded-full hover:border hover:border-yellow-200">
                              <div className="h-[25px] aspect-square">
                                 <img
                                    className="h-full w-full object-contain"
                                    src="/images/icons/netlifyIcon.png"
                                    alt=""
                                 />
                              </div>
                           </section>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Projects;
