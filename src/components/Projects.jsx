import React from "react";

import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
   return (
      <section
         id="projects"
         className="m-5 w-[90%] mx-auto  pb-3 text-textColor"
      >
         <h2 className="text-3xl text-center p-3 font-semibold">
            Mis Proyectos:
         </h2>

         <div className="galeria z-10  flex justify-center flex-wrap mt-5 text-white">
            <div className="group relative card shadow-xl w-[380px]  bg-content-2 sm:bg-content-2 rounded-[8px] overflow-hidden shadow-[0px 2px 4px rgba(0,0,0,0.2) m-[20px] mb-auto">
               <div className="image relative w-full  overflow-hidden">
                  <img
                     className="object-cover h-[250px]  w-full transition-transform   transform scale-100 duration-300 rotate-0 group-hover:scale-105 group-hover:rotate-[-2deg]"
                     src="/images/projects/RickMorty.jpg"
                     alt=""
                  />
               </div>
               <div className="bg-content-2/80 flex flex-col justify-center items-center  text-xl transition-transform duration-300 ease-in-out transform h-[100%] w-full card-content p-1 text-white sm:translate-y-full sm:group-hover:translate-y-0 sm:top-full sm:group-hover:top-0 sm:absolute  sm:opacity-0 group-hover:opacity-100">
                  <h2 className="font-semibold text-2xl">Rick & Morty</h2>
                  <p className="text-lg ">
                     Pagina web que muestra los diferentes personajes de la
                     serie Rick and Morty, según la dimensión en la que se
                     encuentran dichos personajes.
                     <br />
                     <span className="text-bkg dark:text-content-3">
                        HTML, CSS, Javascript,Axios, React, Tailwind
                     </span>
                  </p>
                  <div className="card-links flex justify-center h-[50px]">
                     <div className="flex justify-between gap-6 overflow-hidden h-10 m-2">
                        <a
                           href="https://github.com/FabrizioPC/RickAndMorty"
                           target="_blank"
                        >
                           <section className="w-10 h-auto ">
                              <div className="svgGithub">
                                 <svg
                                    className="w-auto h-auto"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                 >
                                    <path
                                       fillRule="evenodd"
                                       d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                       clipRule="evenodd"
                                    />
                                 </svg>
                              </div>
                           </section>
                        </a>
                        <a
                           href="https://rickandmortyfpgen28.netlify.app"
                           target="blank"
                        >
                           <section className="w-10 h-auto">
                              <div className="svgNetlify ">
                                 <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 50 50"
                                 >
                                    <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 12.317 37.683 2 25 2 z M 8.0429688 12.664062 L 15.046875 24.076172 C 15.514875 18.994172 19.798 15 25 15 L 43.462891 15 C 43.813891 15.646 44.125203 16.316 44.408203 17 L 30.974609 17 C 33.412609 18.825 35 21.727 35 25 C 35 26.787 34.522266 28.463016 33.697266 29.916016 C 33.690266 29.930016 33.691594 29.944984 33.683594 29.958984 L 24.537109 45.976562 C 23.790109 45.959562 23.054125 45.902547 22.328125 45.810547 L 28.976562 34.171875 C 27.756563 34.702875 26.413 35 25 35 C 21.441 35 18.318875 33.124406 16.546875 30.316406 C 16.523875 30.287406 16.496562 30.264422 16.476562 30.232422 L 6.8320312 14.515625 C 7.2030312 13.874625 7.6079688 13.259062 8.0429688 12.664062 z M 25 17 A 8 8 0 0 0 17 25 A 8 8 0 0 0 25 33 A 8 8 0 0 0 33 25 A 8 8 0 0 0 25 17 z"></path>
                                 </svg>
                              </div>
                           </section>
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <div className="group relative card shadow-xl w-[380px] bg-content-2 sm:bg-content-2 rounded-[8px] overflow-hidden shadow-[0px 2px 4px rgba(0,0,0,0.2) m-[20px] mb-auto">
               <div className="image relative w-full  overflow-hidden">
                  <img
                     className="object-cover h-[250px]  w-full transition-transform   transform scale-100 duration-300 rotate-0 group-hover:scale-105 group-hover:rotate-[-2deg]"
                     src="/images/projects/Pokedex.jpg"
                     alt=""
                  />
               </div>
               <div className="bg-content-2/80 flex flex-col justify-center items-center  text-xl transition-transform duration-300 ease-in-out transform h-[100%] w-full card-content p-1 text-white sm:translate-y-full sm:group-hover:translate-y-0 sm:top-full sm:group-hover:top-0 sm:absolute  sm:opacity-0 group-hover:opacity-100">
                  <h2 className="font-semibold text-2xl">POKEDEX</h2>
                  <p className="text-lg ">
                     Pagina web que le permite al usuario ver el tipo,
                     habilidades y estadísticas de los Pokémons.
                     <br />
                     <span className="text-bkg dark:text-content-3">
                        HTML, CSS, React, Redux, Axios, Tailwind
                     </span>
                  </p>
                  <div className="card-links flex justify-center h-[50px]">
                     <div className="flex justify-between gap-6 overflow-hidden h-10 m-2">
                        <a
                           href="https://github.com/FabrizioPC/PokedexApp"
                           target="_blank"
                        >
                           <section className="w-10 h-auto ">
                              <div className="svgGithub">
                                 <svg
                                    className="w-auto h-auto"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                 >
                                    <path
                                       fillRule="evenodd"
                                       d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                       clipRule="evenodd"
                                    />
                                 </svg>
                              </div>
                           </section>
                        </a>
                        <a
                           href="https://pokedexappfpgen28.netlify.app/"
                           target="blank"
                        >
                           <section className="w-10 h-auto">
                              <div className="svgNetlify">
                                 <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 50 50"
                                 >
                                    <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 12.317 37.683 2 25 2 z M 8.0429688 12.664062 L 15.046875 24.076172 C 15.514875 18.994172 19.798 15 25 15 L 43.462891 15 C 43.813891 15.646 44.125203 16.316 44.408203 17 L 30.974609 17 C 33.412609 18.825 35 21.727 35 25 C 35 26.787 34.522266 28.463016 33.697266 29.916016 C 33.690266 29.930016 33.691594 29.944984 33.683594 29.958984 L 24.537109 45.976562 C 23.790109 45.959562 23.054125 45.902547 22.328125 45.810547 L 28.976562 34.171875 C 27.756563 34.702875 26.413 35 25 35 C 21.441 35 18.318875 33.124406 16.546875 30.316406 C 16.523875 30.287406 16.496562 30.264422 16.476562 30.232422 L 6.8320312 14.515625 C 7.2030312 13.874625 7.6079688 13.259062 8.0429688 12.664062 z M 25 17 A 8 8 0 0 0 17 25 A 8 8 0 0 0 25 33 A 8 8 0 0 0 33 25 A 8 8 0 0 0 25 17 z"></path>
                                 </svg>
                              </div>
                           </section>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="group relative card shadow-xl w-[380px] bg-content-2 sm:bg-content-2 rounded-[8px] overflow-hidden shadow-[0px 2px 4px rgba(0,0,0,0.2) m-[20px] mb-auto">
               <div className="image relative w-full overflow-hidden">
                  <img
                     className="object-cover h-[250px]  w-full transition-transform   transform scale-100 duration-300 rotate-0 group-hover:scale-105 group-hover:rotate-[-2deg]"
                     src="/images/projects/GiftMusic.png"
                     alt=""
                  />
               </div>
               <div className="bg-content-2/80 flex flex-col justify-center items-center  text-xl transition-transform duration-300 ease-in-out transform h-[100%] w-full card-content p-1 text-white sm:translate-y-full sm:group-hover:translate-y-0 sm:top-full sm:group-hover:top-0 sm:absolute  sm:opacity-0 group-hover:opacity-100">
                  <h2 className="font-semibold text-2xl">Gift Music</h2>
                  <p className="text-lg ">
                     Pagina web que cuenta con creacion de usuario.Enfocada en
                     reproducir, guardar y compartir playlists.Con una API de
                     Spotify para buscar los artistas y sus canciones
                     <br />
                     <span className="text-bkg dark:text-content-3">
                        HTML, Javascript, React, Axios, Tailwind CSS, Zustand
                     </span>
                  </p>
                  <div className="card-links flex justify-center h-[50px]">
                     <div className="flex justify-between gap-6 overflow-hidden h-10 m-2">
                        <a
                           href="https://github.com/FabrizioPC/GiftMusic"
                           target="_blank"
                        >
                           <section className="w-10 h-auto ">
                              <div className="svgGithub">
                                 <svg
                                    className="w-auto h-auto"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                 >
                                    <path
                                       fillRule="evenodd"
                                       d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                       clipRule="evenodd"
                                    />
                                 </svg>
                              </div>
                           </section>
                        </a>
                        <a
                           href="https://giftmusicgen28fp.netlify.app/"
                           target="blank"
                        >
                           <section className="w-10 h-auto">
                              <div className="svgNetlify">
                                 <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 50 50"
                                 >
                                    <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 12.317 37.683 2 25 2 z M 8.0429688 12.664062 L 15.046875 24.076172 C 15.514875 18.994172 19.798 15 25 15 L 43.462891 15 C 43.813891 15.646 44.125203 16.316 44.408203 17 L 30.974609 17 C 33.412609 18.825 35 21.727 35 25 C 35 26.787 34.522266 28.463016 33.697266 29.916016 C 33.690266 29.930016 33.691594 29.944984 33.683594 29.958984 L 24.537109 45.976562 C 23.790109 45.959562 23.054125 45.902547 22.328125 45.810547 L 28.976562 34.171875 C 27.756563 34.702875 26.413 35 25 35 C 21.441 35 18.318875 33.124406 16.546875 30.316406 C 16.523875 30.287406 16.496562 30.264422 16.476562 30.232422 L 6.8320312 14.515625 C 7.2030312 13.874625 7.6079688 13.259062 8.0429688 12.664062 z M 25 17 A 8 8 0 0 0 17 25 A 8 8 0 0 0 25 33 A 8 8 0 0 0 33 25 A 8 8 0 0 0 25 17 z"></path>
                                 </svg>
                              </div>
                           </section>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="group relative card shadow-xl w-[380px] bg-content-2 sm:bg-content-2 rounded-[8px] overflow-hidden shadow-[0px 2px 4px rgba(0,0,0,0.2) m-[20px] mb-auto">
               <div className="image relative w-full  overflow-hidden">
                  <img
                     className="object-cover h-[250px]  w-full transition-transform   transform scale-100 duration-300 rotate-0 group-hover:scale-105 group-hover:rotate-[-2deg]"
                     src="/images/projects/Ecommerce.jpg"
                     alt=""
                  />
               </div>
               <div className="bg-content-2/80 flex flex-col justify-center items-center  text-xl transition-transform duration-300 ease-in-out transform h-[100%] w-full card-content p-1 text-white sm:translate-y-full sm:group-hover:translate-y-0 sm:top-full sm:group-hover:top-0 sm:absolute  sm:opacity-0 group-hover:opacity-100">
                  <h2 className="font-semibold text-2xl">Ecommerce</h2>
                  <p className="text-lg ">
                     Pagina Web Ecommerce, utilizando solo javascript con una
                     API de la academia Academlo.
                     <br />
                     <span className="text-bkg dark:text-content-3">
                        HTML, CSS, Javascript
                     </span>
                  </p>
                  <div className="card-links flex justify-center h-[50px]">
                     <div className="flex justify-between gap-6 overflow-hidden h-10 m-2">
                        <a
                           href="https://github.com/FabrizioPC/ProyectoEcommerceGen28"
                           target="_blank"
                        >
                           <section className="w-10 h-auto ">
                              <div className="svgGithub">
                                 <svg
                                    className="w-auto h-auto"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                 >
                                    <path
                                       fillRule="evenodd"
                                       d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                       clipRule="evenodd"
                                    />
                                 </svg>
                              </div>
                           </section>
                        </a>
                        <a
                           href="https://ecommercefabriziopgen.netlify.app/"
                           target="blank"
                        >
                           <section className="w-10 h-auto">
                              <div className="svgNetlify">
                                 <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 50 50"
                                 >
                                    <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 12.317 37.683 2 25 2 z M 8.0429688 12.664062 L 15.046875 24.076172 C 15.514875 18.994172 19.798 15 25 15 L 43.462891 15 C 43.813891 15.646 44.125203 16.316 44.408203 17 L 30.974609 17 C 33.412609 18.825 35 21.727 35 25 C 35 26.787 34.522266 28.463016 33.697266 29.916016 C 33.690266 29.930016 33.691594 29.944984 33.683594 29.958984 L 24.537109 45.976562 C 23.790109 45.959562 23.054125 45.902547 22.328125 45.810547 L 28.976562 34.171875 C 27.756563 34.702875 26.413 35 25 35 C 21.441 35 18.318875 33.124406 16.546875 30.316406 C 16.523875 30.287406 16.496562 30.264422 16.476562 30.232422 L 6.8320312 14.515625 C 7.2030312 13.874625 7.6079688 13.259062 8.0429688 12.664062 z M 25 17 A 8 8 0 0 0 17 25 A 8 8 0 0 0 25 33 A 8 8 0 0 0 33 25 A 8 8 0 0 0 25 17 z"></path>
                                 </svg>
                              </div>
                           </section>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="group relative card shadow-xl w-[380px] bg-content-2 sm:bg-content-2 rounded-[8px] overflow-hidden shadow-[0px 2px 4px rgba(0,0,0,0.2) m-[20px] mb-auto">
               <div className="image relative w-full  overflow-hidden">
                  <img
                     className="object-cover h-[250px]  w-full transition-transform   transform scale-100 duration-300 rotate-0 group-hover:scale-105 group-hover:rotate-[-2deg]"
                     src="/images/projects/WeatherApp.png"
                     alt=""
                  />
               </div>
               <div className="bg-content-2/80 flex flex-col justify-center items-center  text-xl transition-transform duration-300 ease-in-out transform h-[100%] w-full card-content p-1 text-white sm:translate-y-full sm:group-hover:translate-y-0 sm:top-full sm:group-hover:top-0 sm:absolute  sm:opacity-0 group-hover:opacity-100">
                  <h2 className="font-semibold text-2xl">WeatherApp</h2>
                  <p className="text-lg ">
                     Pagina Web enfocada en buscar el clima de un Pais o
                     Ciudad.Usando el API de openweathermap
                     <br />
                     <span className="text-bkg dark:text-content-3">
                        HTML, CSS, Javascript,Axios, React,Tailwind
                     </span>
                  </p>
                  <div className="card-links flex justify-center h-[50px]">
                     <div className="flex justify-between gap-6 overflow-hidden h-10 m-2">
                        <a
                           href="https://github.com/FabrizioPC/WeatherPage"
                           target="_blank"
                        >
                           <section className="w-10 h-auto ">
                              <div className="svgGithub">
                                 <svg
                                    className="w-auto h-auto"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                 >
                                    <path
                                       fillRule="evenodd"
                                       d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                       clipRule="evenodd"
                                    />
                                 </svg>
                              </div>
                           </section>
                        </a>
                        <a
                           href="https://weatherappfp28gen.netlify.app/"
                           target="blank"
                        >
                           <section className="w-10 h-auto">
                              <div className="svgNetlify">
                                 <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 50 50"
                                 >
                                    <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 12.317 37.683 2 25 2 z M 8.0429688 12.664062 L 15.046875 24.076172 C 15.514875 18.994172 19.798 15 25 15 L 43.462891 15 C 43.813891 15.646 44.125203 16.316 44.408203 17 L 30.974609 17 C 33.412609 18.825 35 21.727 35 25 C 35 26.787 34.522266 28.463016 33.697266 29.916016 C 33.690266 29.930016 33.691594 29.944984 33.683594 29.958984 L 24.537109 45.976562 C 23.790109 45.959562 23.054125 45.902547 22.328125 45.810547 L 28.976562 34.171875 C 27.756563 34.702875 26.413 35 25 35 C 21.441 35 18.318875 33.124406 16.546875 30.316406 C 16.523875 30.287406 16.496562 30.264422 16.476562 30.232422 L 6.8320312 14.515625 C 7.2030312 13.874625 7.6079688 13.259062 8.0429688 12.664062 z M 25 17 A 8 8 0 0 0 17 25 A 8 8 0 0 0 25 33 A 8 8 0 0 0 33 25 A 8 8 0 0 0 25 17 z"></path>
                                 </svg>
                              </div>
                           </section>
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <div className="group relative card shadow-xl w-[380px] bg-content-2 sm:bg-content-2 rounded-[8px] overflow-hidden shadow-[0px 2px 4px rgba(0,0,0,0.2) m-[20px] mb-auto">
               <div className="image relative w-full overflow-hidden">
                  <img
                     className="object-cover h-[250px]  w-full transition-transform   transform scale-100 duration-300 rotate-0 group-hover:scale-105 group-hover:rotate-[-2deg]"
                     src="/images/projects/InfoGalax.jpg"
                     alt=""
                  />
               </div>
               <div className="bg-content-2/80 flex flex-col justify-center items-center  text-xl transition-transform duration-300 ease-in-out transform h-[100%] w-full card-content p-1 text-white sm:translate-y-full sm:group-hover:translate-y-0 sm:top-full sm:group-hover:top-0 sm:absolute  sm:opacity-0 group-hover:opacity-100">
                  <h2 className="font-semibold text-2xl">INFOGALAX</h2>
                  <p className="text-lg ">
                     Pagina enfocada en enviar frases o curiosidades sobre el
                     espacio.
                     <br />
                     <span className="text-bkg dark:text-content-3">
                        HTML, CSS, Javascript, React, Axios
                     </span>
                  </p>
                  <div className="card-links flex justify-center h-[50px]">
                     <div className="flex justify-between gap-6 overflow-hidden h-10 m-2">
                        <a
                           href="https://github.com/FabrizioPC/InfoGalaxFP"
                           target="_blank"
                        >
                           <section className="w-10 h-auto ">
                              <div className="svgGithub">
                                 <svg
                                    className="w-auto h-auto"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                 >
                                    <path
                                       fillRule="evenodd"
                                       d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                       clipRule="evenodd"
                                    />
                                 </svg>
                              </div>
                           </section>
                        </a>
                        <a
                           href="https://infogalaxfpgen28.netlify.app/"
                           target="blank"
                        >
                           <section className="w-10 h-auto">
                              <div className="svgNetlify">
                                 <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 50 50"
                                 >
                                    <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 12.317 37.683 2 25 2 z M 8.0429688 12.664062 L 15.046875 24.076172 C 15.514875 18.994172 19.798 15 25 15 L 43.462891 15 C 43.813891 15.646 44.125203 16.316 44.408203 17 L 30.974609 17 C 33.412609 18.825 35 21.727 35 25 C 35 26.787 34.522266 28.463016 33.697266 29.916016 C 33.690266 29.930016 33.691594 29.944984 33.683594 29.958984 L 24.537109 45.976562 C 23.790109 45.959562 23.054125 45.902547 22.328125 45.810547 L 28.976562 34.171875 C 27.756563 34.702875 26.413 35 25 35 C 21.441 35 18.318875 33.124406 16.546875 30.316406 C 16.523875 30.287406 16.496562 30.264422 16.476562 30.232422 L 6.8320312 14.515625 C 7.2030312 13.874625 7.6079688 13.259062 8.0429688 12.664062 z M 25 17 A 8 8 0 0 0 17 25 A 8 8 0 0 0 25 33 A 8 8 0 0 0 33 25 A 8 8 0 0 0 25 17 z"></path>
                                 </svg>
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
