import Lottie from "lottie-react";
import ani from "../lottie/ani.json";
import { motion } from "framer-motion";
import my from "../imges/my.jpeg";
import cv from "../cv/cv.pdf";
import bgWeb from '../imges/logo-bg.png';


export default function Home() {
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
                    border border-sky-900
                    bg-gray-900 
                    "
          >
            <img className="w-full h-full" src={my} alt="my" />
          </motion.div>
          <p
            className="
                    text-[20px]
                    md:text-[30px]
                    font-bold text-gray-300
                    dark:text-gray-900"
          >
            Fashion Designer
          </p>
        </div>

        <p
          className="p-4 text-gray-200 font-extralight
                dark:text-gray-950
                "
        >
          As a passionate and creative Fashion Designer, I specialize in
          conceptualizing and designing innovative clothing and accessories that
          reflect both current trends and timeless style. I focus on crafting
          unique designs that enhance personal expression and cater to diverse
          tastes. My expertise spans fabric selection, sketching, pattern
          making, and overseeing the production process to ensure each piece is
          crafted with precision and quality. My goal is to create garments that
          not only look beautiful but also provide comfort, confidence, and
          individuality to the wearer.
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
          <a href="https://www.facebook.com/share/MjgAxTm25cV1JQ3c/?mibextid=LQQJ4d">
            <i className=" icon-facebook text-[#1877f2] text-[25px] md:text-[30px]   transition duration-300"></i>
          </a>

          <a href="https://www.instagram.com/amel.helaal?igsh=MmRhNWZnM3A2c2Fv">
            <i className=" fab fa-instagram  text-[#E4405F] dark:text-[#E4405F] text-[25px] md:text-[30px]  transition duration-300"></i>
          </a>

          <a href="https://wa.me/+201000808240">
            <i className=" icon-whatsapp text-[#25d366]  text-[25px] md:text-[30px]  transition duration-300"></i>
          </a>
        </div>
        <div className="btn mt-4 border border-sky-500 cursor-pointer mr-auto ml-4">
          <a href={cv} download="Amel Helal cv.pdf">
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
        <Lottie animationData={ani} loop={true} />
      </div>
    </div>
  );
}
