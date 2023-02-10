import React, { useState } from "react";
import avatar from "../media/avatar.JPG";
import { MdShortText } from "react-icons/md";
import { BsTextLeft } from "react-icons/bs";
import { CiTextAlignLeft } from "react-icons/ci";
import Technologies from "./about/Technologies";
export default function About() {
  const [aboutText, setAboutText] = useState(
    "I am Leonnardo Nascimento, a Full Stack Developer in the San Francisco Bay Area with a background in Graphic Design. I graduated from a coding bootcamp in 2022 and now I create solutions for clients."
  );
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);

  function changeAbout(id) {
    setTab1(false);
    setTab2(false);
    setTab3(false);

    if (id === "1") {
      setTab1(true);
      setAboutText(
        "I am Leonnardo Nascimento, a Full Stack Developer in the San Francisco Bay Area with a background in Graphic Design. I graduated from a coding bootcamp in 2022 and now I create solutions for clients."
      );
    }
    if (id === "2") {
      setTab2(true);
      setAboutText(
        "I am Leonnardo Nascimento, a Full Stack Developer located in the San Francisco Bay Area. After a background in Graphic Design, I decided to transition into web development and enrolled in a coding bootcamp in 2020. I graduated in 2022 and have since been focused on delivering exceptional results for clients."
      );
    }
    if (id === "3") {
      setTab3(true);
      setAboutText(
        "I am Leonnardo Nascimento, a Full Stack Developer based in the San Francisco Bay Area. I have a background in Graphic Design but decided to make a change in 2020 and start learning web development. I enrolled in a coding bootcamp and completed the program in 2022, acquiring the skills and knowledge necessary to excel in the field. Since graduating, I have been providing innovative solutions for clients and working hard to deliver outstanding results. I am passionate about my work and always strive to improve my skills, making me a valuable asset to any project."
      );
    }
  }

  return (
    <div
      className="h-screen w-screen flex items-center justify-center z-20"
      id="About"
    >
      <div className="flex w-full justify-center flex-col">
        <div className=" mx-6 lg:w-2/5 lg:mx-auto card bg-base-100 shadow-xl ">
          <div className="avatar w-full flex justify-center items-center flex-col">
            <div className="mask w-32 my-4 mask-squircle ">
              <img src={avatar} className="w-32 mx-auto" />
            </div>
            <h2 className="text-lg font-medium">Leonnardo Nascimento</h2>
          </div>
          <div className="card-body">
            <div className="tabs tabs-boxed w-full flex items-center justify-center z-40">
              <a
                className={tab1 ? "tab tab-active" : "tab"}
                onClick={() => changeAbout("1")}
              >
                <MdShortText className="text-2xl" />
              </a>
              <a
                className={tab2 ? "tab tab-active" : "tab"}
                onClick={() => changeAbout("2")}
              >
                <BsTextLeft className="text-2xl" />
              </a>
              <a
                className={tab3 ? "tab tab-active" : "tab"}
                onClick={() => changeAbout("3")}
              >
                <CiTextAlignLeft className="text-2xl" />
              </a>
            </div>
            <h2 className="card-title">About me</h2>
            <p>{aboutText}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <Technologies />
      </div>
    </div>
  );
}
