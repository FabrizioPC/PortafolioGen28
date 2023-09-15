import React from "react";

const Home = () => {
   return (
      <section
         id="home"
         className="flex flex-col justify-center items-center mx-auto mt-20"
      >
         <h1 className="text-4xl font-semibold m-2">Fabrizio Pino</h1>
         <h2 className="text-2xl font-semibold text-blue-500 m-2">
            Desarrollador Web Full Stack
         </h2>
         <section className="flex">
            <article className="flex justify-center items-center">
               <a
                  href="https://github.com/FabrizioPC"
                  target="_blank"
                  className="h-[25px] aspect-square m-1"
               >
                  <img
                     className="h-full w-full object-contain"
                     src="/images/icons/githubLogo.png"
                     alt=""
                  />
               </a>
            </article>
            <article className="  flex justify-center items-center">
               <a
                  href="https://www.linkedin.com/in/fabrizio-pino-cayatopa/"
                  target="_blank"
                  className="h-[25px] aspect-square m-1"
               >
                  <img
                     className="h-full w-full object-contain"
                     src="/images/icons/linkedinLogo.png"
                     alt=""
                  />
               </a>
            </article>
            <article className="flex justify-center items-center">
               <a
                  href="mailto:fabrizioxz1@gmail.com"
                  target="_blank"
                  className="h-[25px] aspect-square m-1"
               >
                  <img
                     className="h-full w-full object-contain"
                     src="/images/icons/emailLogo.png"
                     alt=""
                  />
               </a>
            </article>
            <article className="  flex justify-center items-center">
               <a
                  href="../src/cv/CV_FabrizioPino_HF_2023.pdf"
                  target="_blank"
                  className="h-[25px] aspect-square m-1"
               >
                  <img
                     className="h-full w-full object-contain"
                     src="/images/icons/cvLogo.png"
                     alt=""
                  />
               </a>
            </article>
         </section>
         <section className="bg-slate-600 m-5 border rounded-xl sm:m-2 sm:border-none">
            <p className="text-lg font-semibold sm:m-2">
               Actualmente estudiando en Academlo, aprendiendo las diferentes
               librerias y lenguajes para realizar el desarrollo de paginas web
               tanto FrontEnd como BackEnd
            </p>
         </section>
      </section>
   );
};

export default Home;
