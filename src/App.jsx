import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function App() {
   return (
      <section className="bg-[#181823] text-white text-center">
         <header className="flex justify-between p-3">
            <h2 className="font-bold">Fabrizio.P</h2>
            <ul className="sm:flex sm:gap-6 ">
               <li>
                  <a href="">Home</a>
               </li>
               <li>
                  <a href="">About me</a>
               </li>
               <li>
                  <a href="">Projects</a>
               </li>
               <li>
                  <a href="">Contact me</a>
               </li>
            </ul>
         </header>
         <section className="flex flex-col justify-center items-center mx-auto my-4">
            <div className="rounded-xl p-6 overflow-hidden sm:rounded-full sm:w-full sm:aspect-square">
               <img
                  src="/images/fotoperfil.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
               />
            </div>

            <h1 className="text-xl font-semibold">Fabrizio Pino Cayatopa</h1>
            <h2 className="text-xl font-semibold text-blue-500">
               Desarrollador Web Full Stack
            </h2>
         </section>
         <section className="bg-slate-600 m-5 border rounded-xl">
            <p className="text-lg font-semibold">
               Actualmente estudiando en Academlo, aprendiendo las diferentes
               librerias y lenguajes para realizar el desarrollo de paginas web
               tanto FrontEnd como BackEnd
            </p>
         </section>
         <section className="m-4">
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
         <section>
            <h2 className="text-xl font-semibold m-2">Proyectos:</h2>
            <div className="galeria">
               <Swiper
                  spaceBetween={30}
                  pagination={{
                     clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper m-4  p-2  hover:text-blue-500 "
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
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/githubLogo.png"
                                 alt=""
                              />
                           </div>
                        </section>
                        <section className="sm:p-4">
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/netlifyIcon.png"
                                 alt=""
                              />
                           </div>
                        </section>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="/images/projects/Ecommerce.jpg" alt="" />
                     <h2 className="font-semibold text-xl">Ecommerce</h2>
                     <div className="flex items-center justify-center gap-2 mb-5">
                        <section className="sm:p-4">
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/githubLogo.png"
                                 alt=""
                              />
                           </div>
                        </section>
                        <section className="sm:p-4">
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/netlifyIcon.png"
                                 alt=""
                              />
                           </div>
                        </section>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="/images/projects/Pokedex.jpg" alt="" />
                     <h2 className="font-semibold text-xl">Pokedex</h2>
                     <div className="flex items-center justify-center gap-2 mb-5">
                        <section className="sm:p-4">
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/githubLogo.png"
                                 alt=""
                              />
                           </div>
                        </section>
                        <section className="sm:p-4">
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/netlifyIcon.png"
                                 alt=""
                              />
                           </div>
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
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/githubLogo.png"
                                 alt=""
                              />
                           </div>
                        </section>
                        <section className="sm:p-4">
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/netlifyIcon.png"
                                 alt=""
                              />
                           </div>
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
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/githubLogo.png"
                                 alt=""
                              />
                           </div>
                        </section>
                        <section className="sm:p-4">
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/netlifyIcon.png"
                                 alt=""
                              />
                           </div>
                        </section>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="/images/projects/InfoGalax.jpg" alt="" />
                     <h2 className="font-semibold text-xl">InfoGalax</h2>
                     <div className="flex items-center justify-center gap-2">
                        <section className="sm:p-4">
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/githubLogo.png"
                                 alt=""
                              />
                           </div>
                        </section>
                        <section className="sm:p-4">
                           <div className="h-[25px] aspect-square">
                              <img
                                 className="h-full w-full object-contain"
                                 src="/images/icons/netlifyIcon.png"
                                 alt=""
                              />
                           </div>
                        </section>
                     </div>
                  </SwiperSlide>
               </Swiper>
            </div>
         </section>
         <section>Contact:</section>
         <footer></footer>
      </section>
   );
}

export default App;
