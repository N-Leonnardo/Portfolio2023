import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [subject, setSubject] = useState();
  const [text, setText] = useState();
  const [client, setClient] = useState();
  const [modal, setModal] = useState(false);

  function handleSubmit() {
    if (from && subject && text && client) {
      axios
        .post(`https://connection.helpinglocal.org/api/SendEmail`, {
          from: from,
          to: "leonnardoenriquesn@gmail.com",
          subject: client + " " + subject,
          text: text,
        })
        .then(() => {
          alert("Sent");
        });
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h2 className="text-6xl font-bold">Contact Me</h2>
      <div className="flex justify-between items-center flex-col lg:flex-row">
        <div className="w-96 mx-2 ">
          <label id="Name" className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            onChange={(e) => {
              setClient(e.target.value);
            }}
          />
          <label id="Email" className="label">
            <span className="label-text">What is your email?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            onChange={(e) => {
              setFrom(e.target.value);
            }}
          />
          <label id="Name" className="label">
            <span className="label-text">Subject</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col items-start justify-start h-full mx-2  ">
          <label className="label">
            <span className="label-text">Your message</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-96 h-full resize-none"
            placeholder="Type here"
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button
          className="btn btn-success my-8 w-96"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
