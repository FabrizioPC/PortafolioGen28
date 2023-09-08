import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState } from "react";

function App() {
   const [isShowNav, setIsShowNav] = useState(false);
   return (
      <section className="bg-slate-600 text-white text-center overflow-hidden">
         <header className="fixed w-full bg-slate-600">
            <section className="flex p-3 gap-[175px] items-center sm:justify-between sm:mx-3 sm:gap-0 ">
               <h2 className="font-bold">Fabrizio.P</h2>
               <section className="relative ">
                  <button
                     onClick={() => setIsShowNav(!isShowNav)}
                     className="w-[30px] sm:hidden"
                  >
                     <img src="/images/icons/HamburgerIcon.png" alt="" />
                  </button>
                  <div
                     className={`absolute  sm:static  w-[170px] sm:w-full top-12 sm:top-0  bg-slate-400 sm:bg-inherit p-5 sm:p-0 gap-2 rounded-lg transition-[right] ${
                        isShowNav ? "-right-0" : "-right-[300px]"
                     }`}
                  >
                     <ul className="flex flex-col sm:flex-row gap-4  ">
                        <li className="hover:bg-slate-600 hover:text-blue-500">
                           <a href="#home">Home</a>
                        </li>
                        <li className="hover:bg-slate-600 hover:text-blue-500">
                           <a href="#skills">Habilidades</a>
                        </li>
                        <li className="hover:bg-slate-600 hover:text-blue-500">
                           <a href="#projects">Proyectos</a>
                        </li>
                        <li className="hover:bg-slate-600 hover:text-blue-500">
                           <a href="#contact">Contactame</a>
                        </li>
                     </ul>
                  </div>
               </section>
            </section>
         </header>
         <section
            id="home"
            className="flex flex-col justify-center items-center mx-auto my-4"
         >
            <div className="rounded-xl sm:mt-5  p-6 sm:p-0 overflow-hidden  sm:h-[250px] sm:rounded-xl  ">
               <img
                  src="/images/fotoperfil.jpeg"
                  alt=""
                  className="max-w-full max-h-full sm:max-h-[300px] object-contain"
               />
            </div>

            <h1 className="text-xl font-semibold">Fabrizio Pino Cayatopa</h1>
            <h2 className="text-xl font-semibold text-blue-500">
               Desarrollador Web Full Stack
            </h2>
            <section className="bg-slate-600 m-5 border rounded-xl sm:m-2 sm:border-none">
               <p className="text-lg font-semibold sm:m-2">
                  Actualmente estudiando en Academlo, aprendiendo las diferentes
                  librerias y lenguajes para realizar el desarrollo de paginas
                  web tanto FrontEnd como BackEnd
               </p>
            </section>
         </section>
         <section id="skills" className="m-4">
            <h2 className="text-xl font-semibold">Habilidades:</h2>
            <article className="flex flex-col justify-center sm:flex-row mt-4 mb-4 sm:flex-wrap gap-4 ">
               <section className=" flex items-center justify-center gap-[5.75rem] sm:p-4 rounded-[10px] border-2 border-slate-200 h-[80px] hover:border-blue-500">
                  <div className=" h-[65px] aspect-square">
                     <img
                        className="h-full w-full object-cover"
                        src="/images/icons/reactLogo.png"
                        alt=""
                     />
                  </div>
                  <div>
                     <h3 className="text-xl font-semibold">React</h3>
                  </div>
               </section>
               <section className=" flex items-center justify-center  gap-[3.75rem] sm:p-4 rounded-[10px] border-2 border-slate-200 h-[80px] hover:border-blue-500">
                  <div className=" h-[65px] aspect-square">
                     <img
                        className="h-full w-full object-contain"
                        src="/images/icons/javascriptLogo.png"
                        alt=""
                     />
                  </div>
                  <div>
                     <h3 className="text-xl font-semibold">Javascript</h3>
                  </div>
               </section>
               <section className=" flex items-center justify-center  gap-[4.75rem] sm:p-4 rounded-[10px] border-2 border-slate-200 h-[80px] hover:border-blue-500">
                  <div className=" h-[65px] aspect-square">
                     <img
                        className="h-full w-full object-contain"
                        src="/images/icons/githubLogo.png"
                        alt=""
                     />
                  </div>
                  <div>
                     <h3 className="text-xl font-semibold">Github</h3>
                  </div>
               </section>
               <section className=" flex items-center justify-center  gap-[4.75rem] sm:p-4 rounded-[10px] border-2 border-slate-200 h-[80px] hover:border-blue-500">
                  <div className=" h-[65px] aspect-square">
                     <img
                        className="h-full w-full object-contain"
                        src="/images/icons/reduxLogo.png"
                        alt=""
                     />
                  </div>
                  <div>
                     <h3 className="text-xl font-semibold">Redux</h3>
                  </div>
               </section>
            </article>
         </section>
         <section id="projects">
            <h2 className="text-xl font-semibold m-2">Proyectos:</h2>
            <div className="galeria">
               <Swiper
                  spaceBetween={30}
                  pagination={{
                     clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper m-4 p-2  hover:text-blue-500 sm:max-w-[300px] sm:mx-auto"
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
                     <h2 className="font-semibold text-xl">
                        Rating(FrontMentor)
                     </h2>
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
         <section id="contact">Contact:</section>
         <footer></footer>
      </section>
   );
}

export default App;
