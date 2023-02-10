import React from "react";
import { FaWordpress, FaReact, FaJava, FaPython, FaPhp } from "react-icons/fa";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import {
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiPython,
  SiFirebase,
} from "react-icons/si";

export default function Technologies() {
  return (
    <div className="my-2">
      <h2 className="text-2xl text-center">What I am used to work with</h2>
      <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box mx-auto my-2 w-96">
        <div className="carousel-item">
          <FaReact className="text-6xl mx-4" />
        </div>
        <div className="carousel-item">
          <IoLogoHtml5 className="text-6xl mx-4" />
        </div>
        <div className="carousel-item">
          <IoLogoCss3 className="text-6xl mx-4" />
        </div>
        <div className="carousel-item">
          <IoLogoJavascript className="text-6xl mx-4" />
        </div>
        <div className="carousel-item">
          <SiTypescript className="text-6xl mx-4" />
        </div>
        <div className="carousel-item">
          <FaPython className="text-6xl mx-4" />
        </div>
        <div className="carousel-item">
          <FaJava className="text-6xl mx-4" />
        </div>
        <div className="carousel-item">
          <SiMysql className="text-6xl mx-4" />
        </div>
        <div className="carousel-item">
          <SiMongodb className="text-6xl mx-4" />
        </div>
        <div className="carousel-item">
          <SiFirebase className="text-6xl mx-4" />
        </div>
        <div className="carousel-item">
          <FaWordpress className="text-6xl mx-4" />
        </div>
        <div className="carousel-item">
          <FaPhp className="text-6xl mx-4" />
        </div>
      </div>
    </div>
  );
}
