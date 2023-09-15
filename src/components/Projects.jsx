import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Projects = () => {
   return (
      <section id="projects" className=" m-4">
         <h2 className="text-xl font-semibold m-2">Proyectos:</h2>
         <div className="galeria">
            <Swiper
               spaceBetween={30}
               pagination={{
                  clickable: true,
               }}
               modules={[Pagination]}
               className="mx-auto mySwiper m-4 p-2 transition-colors sm:hover:bg-slate-800  hover:text-blue-500 sm:max-w-[350px]"
            >
               <SwiperSlide>
                  <img
                     className="cursor-pointer"
                     src="/images/projects/RickMorty.jpg"
                     alt=""
                  />
                  <h2 className="font-semibold text-xl">Rick&Morty</h2>
                  <div className="flex items-center justify-center gap-2 mb-5">
                     <section className="sm:p-4">
                        <a
                           href="https://github.com/FabrizioPC/RickAndMorty"
                           target="_blank"
                        >
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/githubLogo.png"
                                 alt=""
                              />
                           </div>
                        </a>
                     </section>
                     <section className="sm:p-4">
                        <a
                           href="https://rickandmortyfpgen28.netlify.app"
                           target="blank"
                        >
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/netlifyIcon.png"
                                 alt=""
                              />
                           </div>
                        </a>
                     </section>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/images/projects/Ecommerce.jpg" alt="" />
                  <h2 className="font-semibold text-xl">Ecommerce</h2>
                  <div className="flex items-center justify-center gap-2 mb-5">
                     <section className="sm:p-4">
                        <a
                           href="https://github.com/FabrizioPC/ProyectoEcommerceGen28"
                           target="_blank"
                        >
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/githubLogo.png"
                                 alt=""
                              />
                           </div>
                        </a>
                     </section>
                     <section className="sm:p-4">
                        <a
                           href="https://ecommercefabriziopgen28.netlify.app"
                           target="_blank"
                        >
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/netlifyIcon.png"
                                 alt=""
                              />
                           </div>
                        </a>
                     </section>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/images/projects/Pokedex.jpg" alt="" />
                  <h2 className="font-semibold text-xl">Pokedex</h2>
                  <div className="flex items-center justify-center gap-2 mb-5">
                     <section className="sm:p-4">
                        <a
                           href="https://github.com/FabrizioPC/PokedexApp"
                           target="_blank"
                        >
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/githubLogo.png"
                                 alt=""
                              />
                           </div>
                        </a>
                     </section>
                     <section className="sm:p-4">
                        <a
                           href="https://pokedexappfpgen28.netlify.app"
                           target="_blank"
                        >
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/netlifyIcon.png"
                                 alt=""
                              />
                           </div>
                        </a>
                     </section>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     className="min-h-[159px]"
                     src="/images/projects/WeatherApp.png"
                     alt=""
                  />
                  <h2 className="font-semibold text-xl">WeatherApp</h2>
                  <div className="flex items-center justify-center gap-2 mb-5">
                     <section className="sm:p-4">
                        <a
                           href="https://github.com/FabrizioPC/WeatherPage"
                           target="_blank"
                        >
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/githubLogo.png"
                                 alt=""
                              />
                           </div>
                        </a>
                     </section>
                     <section className="sm:p-4">
                        <a
                           href="https://weatherappfp28gen.netlify.app"
                           target="_blank"
                        >
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/netlifyIcon.png"
                                 alt=""
                              />
                           </div>
                        </a>
                     </section>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     className="max-h-[159px]"
                     src="/images/projects/RatingFrontMentor.png"
                     alt=""
                  />
                  <h2 className="font-semibold text-xl">Rating(FrontMentor)</h2>
                  <div className="flex items-center justify-center gap-2 mb-5">
                     <section className="sm:p-4">
                        <a
                           href="https://github.com/FabrizioPC/proyectosFrontMentor/tree/main/interactive-rating-component-main"
                           target="_blank"
                        >
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/githubLogo.png"
                                 alt=""
                              />
                           </div>
                        </a>
                     </section>
                     <section className="sm:p-4">
                        <a
                           href="https://proyectosfrontmentorfp.netlify.app/interactive-rating-component-main/"
                           target="_blank"
                        >
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/netlifyIcon.png"
                                 alt=""
                              />
                           </div>
                        </a>
                     </section>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/images/projects/InfoGalax.jpg" alt="" />
                  <h2 className="font-semibold text-xl">InfoGalax</h2>
                  <div className="flex items-center justify-center gap-2">
                     <section className="sm:p-4">
                        <a
                           href="https://github.com/FabrizioPC/InfoGalaxFP"
                           target="_blank"
                        >
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/githubLogo.png"
                                 alt=""
                              />
                           </div>
                        </a>
                     </section>
                     <section className="sm:p-4">
                        <a
                           href="https://infogalaxfpgen28.netlify.app"
                           target="_blank"
                        >
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/netlifyIcon.png"
                                 alt=""
                              />
                           </div>
                        </a>
                     </section>
                  </div>
               </SwiperSlide>
            </Swiper>
         </div>
      </section>
   );
};

export default Projects;
