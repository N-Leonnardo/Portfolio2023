import React from "react";
import { useState } from "react";
import My3D from "./3d/My3D";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Navbar from "./Navbar";
export default function HeroSection() {
  const [lights, setLights] = useState(false);
  return (
    <div>
      <div
        className="ws-title absolute z-10 right-24 text-right flex flex-col items-end justify-end"
        style={{
          top: "60vh",
        }}
      >
        <div className="bg-blue-500 w-32 h-2 text-right"></div>
        <h1 className="font-bold text-right text-7xl">
          WELCOME <br /> TO MY <br /> WORLD
        </h1>
        <div className="links flex items-center justify-evenly w-28">
          <a href="">
            <AiFillGithub className="text-2xl" />
          </a>
          <a href="">
            <AiFillLinkedin className="text-2xl" />
          </a>
          <a href="">
            <MdEmail className="text-2xl" />
          </a>
        </div>
      </div>
      <Navbar />
      <My3D lights={lights} />
    </div>
  );
}
