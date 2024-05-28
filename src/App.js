import Home from "./pages/Home";
import useGlobal from "./global/useGlobal";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { useEffect, useState } from "react";

function App() {
  const { darkMode } = useGlobal();
  const [bgImg, setBgImg] = useState("");

  const color = darkMode ? "text-white" : "text-black";

  return (
    <div
      className={`relative  w-full h-full ${color} bg-[url("../src/images/bg2.jpg")] bg-cover bg-no-repeat bg-center bg-fixed  `}
    >
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Services />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
