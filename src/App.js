import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/3d/Box";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./components/3d/Setup";
import Navbar from "./components/Navbar";
import My3D from "./components/3d/My3D";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import {
  Fullpage,
  FullpageSection,
  FullPageSections,
} from "@ap.cx/react-fullpage";
import Projects from "./components/Projects";
import Alert from "./components/Alert";
import { Suspense, useEffect } from "react";
import { useState } from "react";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "LeoNascimento.dev | Portfolio";
  }, []);

  return (
    <div className="bg-default">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Loading() {
  return (
    <div className="bg-white w-screen h-screen flex items-center justify-center flex-col">
      <span className="text-black text-4xl mb-5 font-bold">
        LEONASCIMENTO.DEV
      </span>
      <progress className="progress w-56"></progress>
    </div>
  );
}

function ErrorPage() {
  return (
    <div className="bg-white w-screen h-screen flex items-center justify-center flex-col">
      <span className="text-black text-4xl mb-5 font-bold">Error 404</span>
      <p className="text-black">No page was found</p>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <Alert />
      <Suspense fallback={<Loading />}>
        <Fullpage>
          <FullPageSections>
            <FullpageSection id="Home">
              <HeroSection />
            </FullpageSection>
            <FullpageSection>
              <About />
            </FullpageSection>
            <FullpageSection>
              <Projects />
            </FullpageSection>
            <FullpageSection>
              <Contact />
            </FullpageSection>
          </FullPageSections>
        </Fullpage>
      </Suspense>
    </div>
  );
}

export default App;
