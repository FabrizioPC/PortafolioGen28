import React from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
   const sendEmail = (e) => {
      e.preventDefault();

      emailjs
         .sendForm(
            "service_3fzvkk7",
            "template_14k7s1v",
            e.target,
            "oM56IStOgd3Carj8g"
         )
         .then(
            (result) => {
               console.log(result.text);
               e.target.reset();
            },
            (error) => {
               console.log(error.text);
            }
         );
   };
   return (
      <section id="contact" className=" bg-blue-500 ">
         <h2 className="text-xl font-semibold p-2">Contactame:</h2>
         <form
            onSubmit={sendEmail}
            className="m-2 flex flex-col sm:gap-4 justify-center items-center"
         >
            <label className="text-ls font-semibold">Tu nombre:</label>
            <input
               className="bg-blue-600 w-[150px]"
               type="text"
               name="user_name"
            />
            <label className="text-ls font-semibold">Tu email:</label>
            <input
               className="bg-blue-600 w-[150px]"
               type="email"
               name="user_email"
            />
            <label className="text-ls font-semibold">Mensaje:</label>
            <textarea
               className="bg-blue-600 w-[150px] sm:w-[300px]"
               name="message"
            />
            <input
               type="submit"
               className="cursor-pointer bg-[#fe9143] hover:bg-[#b86931] p-2 w-[100px] my-4 rounded-full"
               value="Enviar"
            />
         </form>
         <div className="flex justify-center gap-2">
            <article className="  flex justify-center items-center">
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
            <article className="flex justify-center items-center">
               <a
                  href="https://wa.me/+51922406372"
                  target="_blank"
                  className="h-[25px] aspect-square m-1"
               >
                  <img
                     className="h-full w-full object-contain"
                     src="/images/icons/whatsappLogo.png"
                     alt=""
                  />
               </a>
            </article>
         </div>
      </section>
   );
};

export default Contact;
