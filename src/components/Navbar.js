import React from "react";

export default function Navbar() {
  return (
    <div
      className="ws-menu bottom-24 left-24 absolute z-40"
      style={{
        top: "85vh",
      }}
    >
      <div className="ws-menu">
        <button className="btn btn-outline border-none">
          <a href="#Home">HOME</a>
        </button>
        <button className="btn btn-outline border-none">
          <a href="#About">ABOUT ME</a>
        </button>
        <button className="btn btn-outline border-none">
          <a href="">PROJECTS</a>
        </button>
        <button className="btn btn-outline border-none">
          <a href="">CONTACT</a>
        </button>
      </div>
    </div>
  );
}
