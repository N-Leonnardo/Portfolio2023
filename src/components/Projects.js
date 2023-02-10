import React from "react";
import ProjectCard from "./projects/ProjectCard";
import myDriverApp from "../media/myDriverApp.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Projects() {
  return (
    <div className="w-screen h-screen flex justify-center lg:items-center overflow-y-scroll">
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 flex flex-col">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
