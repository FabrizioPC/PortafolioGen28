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
                     <span className="text-content-3">
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
                              <div className="svgNetlify m-[3%]">
                                 <svg
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <g
                                       id="SVGRepo_bgCarrier"
                                       stroke-width="0"
                                    ></g>
                                    <g
                                       id="SVGRepo_tracerCarrier"
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                       {" "}
                                       <path d="M22.579 11.36c0.151 0.077 0.291 0.181 0.405 0.307l3.131-1.396-2.921-2.896-0.657 3.943zM16.079 8.729c0.156 0.229 0.249 0.489 0.281 0.765l4.661 1.975c0.14-0.109 0.301-0.188 0.473-0.235l0.765-4.735-2.839-2.979-3.343 5.135zM31.989 16.047l-4.995-4.995-3.401 1.391 8.355 3.552c0 0 0.073 0.052 0.041 0.052zM31.156 16.86l-8.020-3.428c-0.224 0.297-0.563 0.495-0.933 0.541l-0.859 5.277c0.255 0.26 0.401 0.609 0.401 0.973l4.843 1.016 4.443-4.412v-0.083zM20.531 12.333l-4.353-1.855c-0.308 0.469-0.833 0.745-1.391 0.724h-0.265l-3.609 5.568 9.635-4.172v0.011c-0.005-0.073-0.005-0.145 0-0.224 0.005-0.016 0-0.036-0.016-0.052zM25.823 22.079l-4.26-0.881c-0.161 0.209-0.369 0.365-0.615 0.459l-1.016 6.297 5.917-5.865c0 0-0.011 0.032-0.027 0.032zM19.864 21.645c-0.411-0.167-0.713-0.52-0.823-0.948l-7.932-1.629-0.115 0.183 7.199 10.411 0.432-0.427 1.224-7.563c0 0 0.041 0.031 0.015 0.016zM11.276 18.109l7.839 1.615c0.229-0.401 0.64-0.661 1.099-0.697l0.849-5.188-0.183-0.156-9.744 4.177c0.052 0.077 0.099 0.161 0.14 0.249zM7.989 19.416l-0.167-0.165-3.38 1.389 1.64 1.631 1.865-2.896zM10.219 19.948c-0.235 0.109-0.495 0.161-0.749 0.167-0.209 0-0.407-0.032-0.605-0.099l-2.057 2.995 9.021 8.937 1.588-1.579zM8.953 16.427c0.135-0.015 0.276-0.015 0.416 0 0.152-0.020 0.308-0.020 0.459 0l3.645-5.667c-0.285-0.296-0.443-0.692-0.443-1.099-0.015-0.12-0.015-0.245 0-0.364l-4.427-2.047-3.563 3.468zM9.355 6.557l4.317 1.839c0.312-0.26 0.708-0.396 1.115-0.38 0.177 0.005 0.353 0.031 0.525 0.083l3.371-5.26-2.787-2.787-6.541 6.421c0 0-0.011 0.068 0 0.084zM7.74 17.443c0.088-0.161 0.197-0.312 0.323-0.448l-3.693-5.511-4.369 4.245zM7.391 18.375l-6.683-1.396 2.937 2.98 3.704-1.573z"></path>{" "}
                                    </g>
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
                     <span className="text-content-3">
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
                              <div className="svgNetlify m-[3%]">
                                 <svg
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <g
                                       id="SVGRepo_bgCarrier"
                                       stroke-width="0"
                                    ></g>
                                    <g
                                       id="SVGRepo_tracerCarrier"
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                       {" "}
                                       <path d="M22.579 11.36c0.151 0.077 0.291 0.181 0.405 0.307l3.131-1.396-2.921-2.896-0.657 3.943zM16.079 8.729c0.156 0.229 0.249 0.489 0.281 0.765l4.661 1.975c0.14-0.109 0.301-0.188 0.473-0.235l0.765-4.735-2.839-2.979-3.343 5.135zM31.989 16.047l-4.995-4.995-3.401 1.391 8.355 3.552c0 0 0.073 0.052 0.041 0.052zM31.156 16.86l-8.020-3.428c-0.224 0.297-0.563 0.495-0.933 0.541l-0.859 5.277c0.255 0.26 0.401 0.609 0.401 0.973l4.843 1.016 4.443-4.412v-0.083zM20.531 12.333l-4.353-1.855c-0.308 0.469-0.833 0.745-1.391 0.724h-0.265l-3.609 5.568 9.635-4.172v0.011c-0.005-0.073-0.005-0.145 0-0.224 0.005-0.016 0-0.036-0.016-0.052zM25.823 22.079l-4.26-0.881c-0.161 0.209-0.369 0.365-0.615 0.459l-1.016 6.297 5.917-5.865c0 0-0.011 0.032-0.027 0.032zM19.864 21.645c-0.411-0.167-0.713-0.52-0.823-0.948l-7.932-1.629-0.115 0.183 7.199 10.411 0.432-0.427 1.224-7.563c0 0 0.041 0.031 0.015 0.016zM11.276 18.109l7.839 1.615c0.229-0.401 0.64-0.661 1.099-0.697l0.849-5.188-0.183-0.156-9.744 4.177c0.052 0.077 0.099 0.161 0.14 0.249zM7.989 19.416l-0.167-0.165-3.38 1.389 1.64 1.631 1.865-2.896zM10.219 19.948c-0.235 0.109-0.495 0.161-0.749 0.167-0.209 0-0.407-0.032-0.605-0.099l-2.057 2.995 9.021 8.937 1.588-1.579zM8.953 16.427c0.135-0.015 0.276-0.015 0.416 0 0.152-0.020 0.308-0.020 0.459 0l3.645-5.667c-0.285-0.296-0.443-0.692-0.443-1.099-0.015-0.12-0.015-0.245 0-0.364l-4.427-2.047-3.563 3.468zM9.355 6.557l4.317 1.839c0.312-0.26 0.708-0.396 1.115-0.38 0.177 0.005 0.353 0.031 0.525 0.083l3.371-5.26-2.787-2.787-6.541 6.421c0 0-0.011 0.068 0 0.084zM7.74 17.443c0.088-0.161 0.197-0.312 0.323-0.448l-3.693-5.511-4.369 4.245zM7.391 18.375l-6.683-1.396 2.937 2.98 3.704-1.573z"></path>{" "}
                                    </g>
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
                     <span className="text-content-3">
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
                              <div className="svgNetlify m-[3%]">
                                 <svg
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <g
                                       id="SVGRepo_bgCarrier"
                                       stroke-width="0"
                                    ></g>
                                    <g
                                       id="SVGRepo_tracerCarrier"
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                       {" "}
                                       <path d="M22.579 11.36c0.151 0.077 0.291 0.181 0.405 0.307l3.131-1.396-2.921-2.896-0.657 3.943zM16.079 8.729c0.156 0.229 0.249 0.489 0.281 0.765l4.661 1.975c0.14-0.109 0.301-0.188 0.473-0.235l0.765-4.735-2.839-2.979-3.343 5.135zM31.989 16.047l-4.995-4.995-3.401 1.391 8.355 3.552c0 0 0.073 0.052 0.041 0.052zM31.156 16.86l-8.020-3.428c-0.224 0.297-0.563 0.495-0.933 0.541l-0.859 5.277c0.255 0.26 0.401 0.609 0.401 0.973l4.843 1.016 4.443-4.412v-0.083zM20.531 12.333l-4.353-1.855c-0.308 0.469-0.833 0.745-1.391 0.724h-0.265l-3.609 5.568 9.635-4.172v0.011c-0.005-0.073-0.005-0.145 0-0.224 0.005-0.016 0-0.036-0.016-0.052zM25.823 22.079l-4.26-0.881c-0.161 0.209-0.369 0.365-0.615 0.459l-1.016 6.297 5.917-5.865c0 0-0.011 0.032-0.027 0.032zM19.864 21.645c-0.411-0.167-0.713-0.52-0.823-0.948l-7.932-1.629-0.115 0.183 7.199 10.411 0.432-0.427 1.224-7.563c0 0 0.041 0.031 0.015 0.016zM11.276 18.109l7.839 1.615c0.229-0.401 0.64-0.661 1.099-0.697l0.849-5.188-0.183-0.156-9.744 4.177c0.052 0.077 0.099 0.161 0.14 0.249zM7.989 19.416l-0.167-0.165-3.38 1.389 1.64 1.631 1.865-2.896zM10.219 19.948c-0.235 0.109-0.495 0.161-0.749 0.167-0.209 0-0.407-0.032-0.605-0.099l-2.057 2.995 9.021 8.937 1.588-1.579zM8.953 16.427c0.135-0.015 0.276-0.015 0.416 0 0.152-0.020 0.308-0.020 0.459 0l3.645-5.667c-0.285-0.296-0.443-0.692-0.443-1.099-0.015-0.12-0.015-0.245 0-0.364l-4.427-2.047-3.563 3.468zM9.355 6.557l4.317 1.839c0.312-0.26 0.708-0.396 1.115-0.38 0.177 0.005 0.353 0.031 0.525 0.083l3.371-5.26-2.787-2.787-6.541 6.421c0 0-0.011 0.068 0 0.084zM7.74 17.443c0.088-0.161 0.197-0.312 0.323-0.448l-3.693-5.511-4.369 4.245zM7.391 18.375l-6.683-1.396 2.937 2.98 3.704-1.573z"></path>{" "}
                                    </g>
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
                     <span className="text-content-3">
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
                              <div className="svgNetlify m-[3%]">
                                 <svg
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <g
                                       id="SVGRepo_bgCarrier"
                                       stroke-width="0"
                                    ></g>
                                    <g
                                       id="SVGRepo_tracerCarrier"
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                       {" "}
                                       <path d="M22.579 11.36c0.151 0.077 0.291 0.181 0.405 0.307l3.131-1.396-2.921-2.896-0.657 3.943zM16.079 8.729c0.156 0.229 0.249 0.489 0.281 0.765l4.661 1.975c0.14-0.109 0.301-0.188 0.473-0.235l0.765-4.735-2.839-2.979-3.343 5.135zM31.989 16.047l-4.995-4.995-3.401 1.391 8.355 3.552c0 0 0.073 0.052 0.041 0.052zM31.156 16.86l-8.020-3.428c-0.224 0.297-0.563 0.495-0.933 0.541l-0.859 5.277c0.255 0.26 0.401 0.609 0.401 0.973l4.843 1.016 4.443-4.412v-0.083zM20.531 12.333l-4.353-1.855c-0.308 0.469-0.833 0.745-1.391 0.724h-0.265l-3.609 5.568 9.635-4.172v0.011c-0.005-0.073-0.005-0.145 0-0.224 0.005-0.016 0-0.036-0.016-0.052zM25.823 22.079l-4.26-0.881c-0.161 0.209-0.369 0.365-0.615 0.459l-1.016 6.297 5.917-5.865c0 0-0.011 0.032-0.027 0.032zM19.864 21.645c-0.411-0.167-0.713-0.52-0.823-0.948l-7.932-1.629-0.115 0.183 7.199 10.411 0.432-0.427 1.224-7.563c0 0 0.041 0.031 0.015 0.016zM11.276 18.109l7.839 1.615c0.229-0.401 0.64-0.661 1.099-0.697l0.849-5.188-0.183-0.156-9.744 4.177c0.052 0.077 0.099 0.161 0.14 0.249zM7.989 19.416l-0.167-0.165-3.38 1.389 1.64 1.631 1.865-2.896zM10.219 19.948c-0.235 0.109-0.495 0.161-0.749 0.167-0.209 0-0.407-0.032-0.605-0.099l-2.057 2.995 9.021 8.937 1.588-1.579zM8.953 16.427c0.135-0.015 0.276-0.015 0.416 0 0.152-0.020 0.308-0.020 0.459 0l3.645-5.667c-0.285-0.296-0.443-0.692-0.443-1.099-0.015-0.12-0.015-0.245 0-0.364l-4.427-2.047-3.563 3.468zM9.355 6.557l4.317 1.839c0.312-0.26 0.708-0.396 1.115-0.38 0.177 0.005 0.353 0.031 0.525 0.083l3.371-5.26-2.787-2.787-6.541 6.421c0 0-0.011 0.068 0 0.084zM7.74 17.443c0.088-0.161 0.197-0.312 0.323-0.448l-3.693-5.511-4.369 4.245zM7.391 18.375l-6.683-1.396 2.937 2.98 3.704-1.573z"></path>{" "}
                                    </g>
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
                     <span className="text-content-3">
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
                              <div className="svgNetlify m-[3%]">
                                 <svg
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <g
                                       id="SVGRepo_bgCarrier"
                                       stroke-width="0"
                                    ></g>
                                    <g
                                       id="SVGRepo_tracerCarrier"
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                       {" "}
                                       <path d="M22.579 11.36c0.151 0.077 0.291 0.181 0.405 0.307l3.131-1.396-2.921-2.896-0.657 3.943zM16.079 8.729c0.156 0.229 0.249 0.489 0.281 0.765l4.661 1.975c0.14-0.109 0.301-0.188 0.473-0.235l0.765-4.735-2.839-2.979-3.343 5.135zM31.989 16.047l-4.995-4.995-3.401 1.391 8.355 3.552c0 0 0.073 0.052 0.041 0.052zM31.156 16.86l-8.020-3.428c-0.224 0.297-0.563 0.495-0.933 0.541l-0.859 5.277c0.255 0.26 0.401 0.609 0.401 0.973l4.843 1.016 4.443-4.412v-0.083zM20.531 12.333l-4.353-1.855c-0.308 0.469-0.833 0.745-1.391 0.724h-0.265l-3.609 5.568 9.635-4.172v0.011c-0.005-0.073-0.005-0.145 0-0.224 0.005-0.016 0-0.036-0.016-0.052zM25.823 22.079l-4.26-0.881c-0.161 0.209-0.369 0.365-0.615 0.459l-1.016 6.297 5.917-5.865c0 0-0.011 0.032-0.027 0.032zM19.864 21.645c-0.411-0.167-0.713-0.52-0.823-0.948l-7.932-1.629-0.115 0.183 7.199 10.411 0.432-0.427 1.224-7.563c0 0 0.041 0.031 0.015 0.016zM11.276 18.109l7.839 1.615c0.229-0.401 0.64-0.661 1.099-0.697l0.849-5.188-0.183-0.156-9.744 4.177c0.052 0.077 0.099 0.161 0.14 0.249zM7.989 19.416l-0.167-0.165-3.38 1.389 1.64 1.631 1.865-2.896zM10.219 19.948c-0.235 0.109-0.495 0.161-0.749 0.167-0.209 0-0.407-0.032-0.605-0.099l-2.057 2.995 9.021 8.937 1.588-1.579zM8.953 16.427c0.135-0.015 0.276-0.015 0.416 0 0.152-0.020 0.308-0.020 0.459 0l3.645-5.667c-0.285-0.296-0.443-0.692-0.443-1.099-0.015-0.12-0.015-0.245 0-0.364l-4.427-2.047-3.563 3.468zM9.355 6.557l4.317 1.839c0.312-0.26 0.708-0.396 1.115-0.38 0.177 0.005 0.353 0.031 0.525 0.083l3.371-5.26-2.787-2.787-6.541 6.421c0 0-0.011 0.068 0 0.084zM7.74 17.443c0.088-0.161 0.197-0.312 0.323-0.448l-3.693-5.511-4.369 4.245zM7.391 18.375l-6.683-1.396 2.937 2.98 3.704-1.573z"></path>{" "}
                                    </g>
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
                     <span className="text-content-3">
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
                              <div className="svgNetlify m-[3%]">
                                 <svg
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <g
                                       id="SVGRepo_bgCarrier"
                                       stroke-width="0"
                                    ></g>
                                    <g
                                       id="SVGRepo_tracerCarrier"
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                       {" "}
                                       <path d="M22.579 11.36c0.151 0.077 0.291 0.181 0.405 0.307l3.131-1.396-2.921-2.896-0.657 3.943zM16.079 8.729c0.156 0.229 0.249 0.489 0.281 0.765l4.661 1.975c0.14-0.109 0.301-0.188 0.473-0.235l0.765-4.735-2.839-2.979-3.343 5.135zM31.989 16.047l-4.995-4.995-3.401 1.391 8.355 3.552c0 0 0.073 0.052 0.041 0.052zM31.156 16.86l-8.020-3.428c-0.224 0.297-0.563 0.495-0.933 0.541l-0.859 5.277c0.255 0.26 0.401 0.609 0.401 0.973l4.843 1.016 4.443-4.412v-0.083zM20.531 12.333l-4.353-1.855c-0.308 0.469-0.833 0.745-1.391 0.724h-0.265l-3.609 5.568 9.635-4.172v0.011c-0.005-0.073-0.005-0.145 0-0.224 0.005-0.016 0-0.036-0.016-0.052zM25.823 22.079l-4.26-0.881c-0.161 0.209-0.369 0.365-0.615 0.459l-1.016 6.297 5.917-5.865c0 0-0.011 0.032-0.027 0.032zM19.864 21.645c-0.411-0.167-0.713-0.52-0.823-0.948l-7.932-1.629-0.115 0.183 7.199 10.411 0.432-0.427 1.224-7.563c0 0 0.041 0.031 0.015 0.016zM11.276 18.109l7.839 1.615c0.229-0.401 0.64-0.661 1.099-0.697l0.849-5.188-0.183-0.156-9.744 4.177c0.052 0.077 0.099 0.161 0.14 0.249zM7.989 19.416l-0.167-0.165-3.38 1.389 1.64 1.631 1.865-2.896zM10.219 19.948c-0.235 0.109-0.495 0.161-0.749 0.167-0.209 0-0.407-0.032-0.605-0.099l-2.057 2.995 9.021 8.937 1.588-1.579zM8.953 16.427c0.135-0.015 0.276-0.015 0.416 0 0.152-0.020 0.308-0.020 0.459 0l3.645-5.667c-0.285-0.296-0.443-0.692-0.443-1.099-0.015-0.12-0.015-0.245 0-0.364l-4.427-2.047-3.563 3.468zM9.355 6.557l4.317 1.839c0.312-0.26 0.708-0.396 1.115-0.38 0.177 0.005 0.353 0.031 0.525 0.083l3.371-5.26-2.787-2.787-6.541 6.421c0 0-0.011 0.068 0 0.084zM7.74 17.443c0.088-0.161 0.197-0.312 0.323-0.448l-3.693-5.511-4.369 4.245zM7.391 18.375l-6.683-1.396 2.937 2.98 3.704-1.573z"></path>{" "}
                                    </g>
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
