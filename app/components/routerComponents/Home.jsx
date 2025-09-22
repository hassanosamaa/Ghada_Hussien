"use client";
import Lottie from "lottie-react";
import space from "@/lottie/space.json";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import WhatsappIcon from "../icons/WhatsappIcon";

const HomePage = () => {
  return (
    <div
      id="about"
      className="container 
        mx-auto p-4 md:h-[80vh]
        flex flex-col md:flex-row
        justify-center items-center
        gap-[20px] pt-32 md:mt-0
        md:gap-[10%] text-white
        
       "
    >
      <div
        className="  
            w-full md:w-[60%] 
            flex flex-col justify-center
            items-center md:items-start
            gap-[10px] "
      >
        <div
          className="flex justify-start w-full pl-4
                items-center gap-[15px]"
        >
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-[50px] h-[50px]
                     md:w-[80px] md:h-[80px]
                    rounded-full overflow-hidden
                    border border-zinc-600
                    bg-gray-900 
                    "
          >
            <img
              className="w-full h-full"
              src={"/image-person.jpeg"}
              alt="my"
            />
          </motion.div>
          <p
            className="
                    text-[20px]
                    md:text-[30px]
                    font-bold text-gray-300
                "
          >
            Software QA Engineer
          </p>
        </div>

        <p
          className="p-4 text-gray-200 font-extralight
              
                "
        >
          Software Test Engineer with hands-on experience in both manual and
          automation testing for web and mobile applications. Skilled in
          creating and executing test cases, identifying bugs, and ensuring
          product quality through regression, smoke, sanity, exploratory, and UI
          testing. Proficient in Java, Selenium WebDriver, TestNG, Cucumber,
          Appium, Postman, Apidog, Swagger, and JMeter, as well as defect
          tracking tools including Jira, Azure DevOps, Trello, Git, and GitHub.
          Certified in ISTQB Foundation and Agile Tester, with strong knowledge
          of SQL, OOP, SDLC, STLC, and Agile/Scrum practices.
        </p>
        <div
          className="flex 
                justify-start
                gap-[15px]
                items-center w-full 
                md:w-[30%]
                ml-[25px]
                "
        >
          <a href="https://linkedin.com/in/ghada-hussien-qa">
            <i className=" text-[25px] md:text-[30px]   transition duration-300">
              <Linkedin color="#0077b5" />
            </i>
          </a>

          <a href="https://github.com/GhadaHussienQA">
            <i className=" text-[25px] md:text-[30px]  transition duration-300">
              <Github color="#ffff" />
            </i>
          </a>

          <a href="https://wa.me/+201098940399">
            <i className="   text-[25px] md:text-[30px]  transition duration-300">
              <WhatsappIcon />
            </i>
          </a>
        </div>
        <div className=" py-[8px] mt-4 rounded-[5px] px-[15px] border border-zinc-600 cursor-pointer mr-auto ml-4 opacity-100 hover:opacity-70  transition duration-300">
          <a href={""} download="Ghada Hussien cv.pdf">
            Download My CV
          </a>{" "}
        </div>
      </div>

      <div
        className="
            w-full md:w-[40%]
            flex justify-center
            items-center"
      >

        <Lottie
          animationData={space}
          loop={true}
          style={{
            filter: "grayscale(100%) contrast(200%)",
          }}
        />
      </div>
    </div>
  );
};
export default HomePage;
