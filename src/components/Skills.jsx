import React from "react";

const Skills = () => {
   return (
      <section id="skills" className="m-4">
         <h2 className="text-xl font-semibold">Habilidades:</h2>
         <article className="flex flex-col justify-center sm:flex-row mt-4 mb-4 sm:flex-wrap gap-4 ">
            <section className="bg-blue-600  flex items-center justify-center gap-[5.75rem] sm:p-4 rounded-[10px] border-2 transition-colors border-slate-200 h-[80px] hover:border-orange-400">
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
            <section className="bg-blue-600  flex items-center justify-center  gap-[3.75rem] sm:p-4 rounded-[10px] border-2 transition-colors border-slate-200 h-[80px] hover:border-orange-400">
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
            <section className="bg-blue-600  flex items-center justify-center  gap-[4.75rem] sm:p-4 rounded-[10px] border-2 transition-colors border-slate-200 h-[80px] hover:border-orange-400">
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
            <section className="bg-blue-600  flex items-center justify-center  gap-[4.75rem] sm:p-4 rounded-[10px] border-2 transition-colors border-slate-200 h-[80px] hover:border-orange-400">
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
   );
};

export default Skills;
