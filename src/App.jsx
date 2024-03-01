import Header from "./components/Header";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
   const [isShowHeader, setIsShowHeader] = useState(false);
   const [theme, setTheme] = useState(() => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
         return "dark";
      }
      return "light";
   });

   useEffect(() => {
      if (theme === "dark") {
         document.querySelector("html").classList.add("dark");
      } else {
         document.querySelector("html").classList.remove("dark");
      }
   }, [theme]);

   const handleChangeTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
   };

   return (
      <section className="text-center overflow-hidden bg-gradient-to-b via-content-1 to-content-3 from-bkg dark:bg-gradient-to-b dark:from-bkg  dark:to-content-3  font-Roboto">
         <Header
            isShowHeader={isShowHeader}
            setIsShowHeader={setIsShowHeader}
            handleChangeTheme={handleChangeTheme}
         />
         <section className="">
            <Home />
            <Skills />
            <Projects />
            <Contact />
         </section>
      </section>
   );
}

export default App;
