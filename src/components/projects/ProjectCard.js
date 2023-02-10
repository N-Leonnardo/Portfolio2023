import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="w-96 m-4">
      <div className="mockup-window bg-base-300">
        <code>
          <div className="px-6 pb-6">
            <img src={props.logo} className="my-20" />
            <h2 className="text-xl font-bold my-2">{props.title}</h2>
            <p className="text-sm my-4">{props.description}</p>
            <a href="" className="w-full link my-1 text-right">
              Read More
            </a>
          </div>
        </code>
      </div>
    </div>
  );
}
