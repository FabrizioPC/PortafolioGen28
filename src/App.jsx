import "./App.css";

import Header from "./components/Header";
import { useState } from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
   const [isShowHeader, setIsShowHeader] = useState(false);

   return (
      <section className="bg-slate-600 text-white text-center overflow-hidden">
         <Header
            isShowHeader={isShowHeader}
            setIsShowHeader={setIsShowHeader}
         />
         <Home />
         <Skills />
         <Projects />
         <Contact />
      </section>
   );
}

export default App;
