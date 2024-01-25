import React from "react";

const Home = () => {
   return (
      <section
         id="home"
         className=" flex flex-col justify-center mt-20 items-center mx-auto w-[90%] text-textColor"
      >
         <h1 className="text-4xl font-extrabold m-2">Fabrizio Pino</h1>
         <h2 className="text-2xl font-semibold text-buttons  ">
            Desarrollador Web Full-Stack
         </h2>
         <section className="logos flex gap-2">
            <article className="flex flex-col  items-center">
               <a
                  href="https://github.com/FabrizioPC"
                  target="_blank"
                  className="h-[28px] aspect-square m-1"
                  title="Github"
               >
                  <svg
                     class=" text-gray-800 dark:text-white"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                  >
                     <path
                        fill-rule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clip-rule="evenodd"
                     />
                  </svg>
               </a>
            </article>
            <article className="flex flex-col  items-center">
               <a
                  href="https://www.linkedin.com/in/fabrizio-pino-cayatopa/"
                  target="_blank"
                  className="h-[28px] aspect-square m-1"
                  title="Linkedin"
               >
                  <svg
                     class="w-6 h-6 text-gray-800 dark:text-white "
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 15 15"
                  >
                     <path
                        fill-rule="evenodd"
                        d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        clip-rule="evenodd"
                     />
                     <path d="M3 5.012H0V15h3V5.012Z" />
                  </svg>
               </a>
            </article>
            <article className="flex flex-col items-center ">
               <a
                  href="mailto:fabrizioxz1@gmail.com"
                  target="_blank"
                  className="h-[28px] aspect-square m-1 "
                  title="Enviar email"
               >
                  <svg
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="text-gray-800 dark:text-white"
                  >
                     <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                     <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     ></g>
                     <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                           d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                           stroke="currentColor"
                           stroke-width="2"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        ></path>{" "}
                     </g>
                  </svg>
               </a>
            </article>
            <article className="flex flex-col items-center">
               <a
                  href="../src/cv/CV_FabrizioPino_HF_2023.pdf"
                  target="_blank"
                  className="h-[28px] aspect-square m-1"
                  title="CV"
               >
                  <svg
                     class="w-6 h-6 text-gray-800 dark:text-white"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                  >
                     <path d="M4.5 11H4v1h.5a.5.5 0 0 0 0-1ZM7 5V.13a2.96 2.96 0 0 0-1.293.749L2.879 3.707A2.96 2.96 0 0 0 2.13 5H7Zm3.375 6H10v3h.375a.624.624 0 0 0 .625-.625v-1.75a.624.624 0 0 0-.625-.625Z" />
                     <path d="M19 7h-1V2a1.97 1.97 0 0 0-1.933-2H9v5a2 2 0 0 1-2 2H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1a1.969 1.969 0 0 0 1.933 2h12.134c1.1 0 1.7-1.236 1.856-1.614a.988.988 0 0 0 .07-.386H19a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1ZM4.5 14H4v1a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1h1.5a2.5 2.5 0 1 1 0 5Zm8.5-.625A2.63 2.63 0 0 1 10.375 16H9a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h1.375A2.63 2.63 0 0 1 13 11.625v1.75ZM17 12a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-1v1h1Z" />
                  </svg>
               </a>
            </article>
         </section>
         <section className="m-5 w-[60%] border rounded-xl sm:m-2 sm:border-none">
            <p className="font-medium text-lg sm:m-2">
               Aprendiendo las diferentes librerias y lenguajes como React y
               Node.js para realizar el desarrollo de paginas web tanto
               Front-End como Back-End.
            </p>
         </section>
      </section>
   );
};

export default Home;
