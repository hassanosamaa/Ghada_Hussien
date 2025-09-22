"use client";

import Lottie from "lottie-react";
import contact from "@/lottie/contact.json";
import { useState } from "react";

const ContactPage = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    // 👇️ access textarea value
    setMessage(event.target.value);
  };
  return (
    <div
      id="contact"
      className="
        container mx-auto p-5  md:h-[70vh]
        flex flex-col 
        gap-[15px]
        md:gap-[10%]
        md:px-32
        md:flex-row justify-center
        items-center"
    >
      <div
        className=" p-4 md:p-0
            w-full md:w-[40%]"
      >
        <Lottie animationData={contact} loop={true} />
      </div>

      <div
        className="
            w-full md:w-[60%] 
            flex flex-col 
            gap-[15px]
            justify-center items-start
            "
      >
        <label
          className="text-gray-300
                dark:text-gray-900"
        >
          Your Message :
        </label>
        <textarea
          className="w-full dark:bg-gray-400
                 outline-none rounded-lg bg-zinc-900/85
                 px-2 py-[4px] placeholder:text-gray-500
                 dark:placeholder:text-gray-900
                 text-gray-200 text-[15px]
                 border border-zinc-600
                 focus:border focus:border-zinc-500
                 dark:text-gray-900

                md:w-[80%]"
          placeholder="Write . . ."
          rows={6}
          id="message"
          name="message"
          value={message}
          onChange={handleMessageChange}
        ></textarea>
        <button
          className=" 
                py-[8px] mt-4 rounded-[5px] text-white px-[15px] border border-zinc-600 cursor-pointer mr-auto ml-4 opacity-100 hover:opacity-70  transition duration-300"
        >
          <a
            href={`mailto:${"ghada.muhussien@gmail.com"}?subject=${"from protofolio"}&body=${message}`}
          >
            Click to Send an Email
          </a>
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
