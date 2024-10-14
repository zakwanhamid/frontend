import { useEffect } from "react";
import Home from "./Home/Home";
import Projects from "./Home/Projects";
import Skills from "./Home/Skills";
import Login from "./Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Home/Header";
import Contact from "./Home/Contact";

function App() {
  // useEffect(() => {
  //   const smoothScroll = () => {
  //     document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //       anchor.addEventListener("click", function (e) {
  //         e.preventDefault();

  //         // Check if the target element exists
  //         const targetElement = document.querySelector(
  //           this.getAttribute("href")
  //         );
  //         if (targetElement) {
  //           targetElement.scrollIntoView({
  //             behavior: "smooth",
  //             block: "start",
  //           });
  //         } else {
  //           console.warn(
  //             "Target element not found:",
  //             this.getAttribute("href")
  //           );
  //         }
  //       });
  //     });
  //   };

  //   smoothScroll();

  //   // Cleanup event listeners on unmount
  //   return () => {
  //     document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //       anchor.removeEventListener("click", smoothScroll);
  //     });
  //   };
  // }, []);

  return (
    <div>
      <Navbar />
      <Header/>
      <Home />
      {/* skill letak resume from luke. projects */}
      <Skills /> 
      <Projects />
      <Contact/>

    </div>
  );
}

export default App;
