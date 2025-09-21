import { useState } from "react";
import Oneproject from "../utilitiesComponents/Oneproject";
import a1 from "../imges/a/a1.jpeg";
import a2 from "../imges/a/a2.jpeg";
import a3 from "../imges/a/a3.jpeg";
import a4 from "../imges/a/a4.jpeg";
import a5 from "../imges/a/a5.jpeg";
import a6 from "../imges/a/a6.jpeg";
import a7 from "../imges/a/a7.jpeg";
import a8 from "../imges/a/a8.jpeg";
import a9 from "../imges/a/a9.jpeg";
import a10 from "../imges/a/a10.jpeg";
import a11 from "../imges/a/a11.jpeg";
import a12 from "../imges/a/a12.jpeg";
import a13 from "../imges/a/a13.jpeg";
import a14 from "../imges/a/a14.jpeg";
import a15 from "../imges/a/a15.jpeg";
import z1 from "../imges/z/z1.jpeg";
import z2 from "../imges/z/z2.jpeg";
import z3 from "../imges/z/z3.jpeg";
import z4 from "../imges/z/z4.jpeg";
import z5 from "../imges/z/z5.jpeg";
import z6 from "../imges/z/z6.jpeg";
import z7 from "../imges/z/z7.jpeg";
import z8 from "../imges/z/z8.jpeg";
import z9 from "../imges/z/z9.jpeg";
import z10 from "../imges/z/z10.jpeg";
import z11 from "../imges/z/z11.jpeg";
import z12 from "../imges/z/z12.jpeg";
import z13 from "../imges/z/z13.jpeg";
import z14 from "../imges/z/z14.jpeg";
import s1 from "../imges/s/s1.jpeg";
import s2 from "../imges/s/s2.jpeg";
import s3 from "../imges/s/s3.jpeg";
import s4 from "../imges/s/s4.jpeg";
import s5 from "../imges/s/s5.jpeg";
import s6 from "../imges/s/s6.jpeg";
import s7 from "../imges/s/s7.jpeg";
import s8 from "../imges/s/s8.jpeg";
import s9 from "../imges/s/s9.jpeg";
import s10 from "../imges/s/s10.jpeg";
import s11 from "../imges/s/s11.jpeg";
import s12 from "../imges/s/s12.jpeg";
import s13 from "../imges/s/s13.jpeg";
import s14 from "../imges/s/s14.jpeg";
import s15 from "../imges/s/s15.jpeg";
import s16 from "../imges/s/s16.jpeg";
import s17 from "../imges/s/s17.jpeg";
import s18 from "../imges/s/s18.jpeg";
import s19 from "../imges/s/s19.jpeg";
import s20 from "../imges/s/s20.jpeg";
import s21 from "../imges/s/s21.jpeg";
import s22 from "../imges/s/s22.jpeg";
import s23 from "../imges/s/s23.jpeg";
import s24 from "../imges/s/s24.jpeg";
import s25 from "../imges/s/s25.jpeg";
import s26 from "../imges/s/s26.jpeg";
import s27 from "../imges/s/s27.jpeg";
import s28 from "../imges/s/s28.jpeg";
import s29 from "../imges/s/s29.jpeg";
import s30 from "../imges/s/s30.jpeg";
import s31 from "../imges/s/s31.jpeg";
import s32 from "../imges/s/s32.jpeg";
import s33 from "../imges/s/s33.jpeg";
import s34 from "../imges/s/s34.jpeg";
import s35 from "../imges/s/s35.jpeg";
import s36 from "../imges/s/s36.jpeg";
import s37 from "../imges/s/s37.jpeg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: true, // تشغيل تلقائي
    autoplaySpeed: 2000,
    slidesToShow: 4, // عدد الصور المرئية
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  const data0 = [
    { img: s5 },
    { img: s6 },
    { img: s34 },
    { img: s35 },
    { img: s36 },
    { img: s37 },
    { img: s12 },
    { img: s15 },

    { img: z2 },
    { img: z13 },
    { img: z9 },
    { img: z1 },

    
    { img: a13 },
    { img: a14 },
    { img: a4 },
    { img: a8 },
   
    { img: z3 },
    { img: z4 },
    { img: a5 },
    { img: a6 },
    { img: s20 },
    { img: s21 },
    { img: s22 },
    { img: s23 },
    { img: s24 },
    { img: z10 },
    { img: z11 },
    { img: z12 },
    { img: z14 },
    { img: s7 },
    { img: s8 },
    { img: s9 },
    { img: s10 },
    { img: s11 },
    { img: s12 },
    { img: s13 },
    { img: a7 },
    { img: a3 },
    { img: a9 },
    { img: a10 },
    { img: s26 },
    { img: s27 },
    { img: s28 },
    { img: a11 },
    { img: z6 },
    { img: z7 },
    { img: a12 },
    { img: a1 },
    { img: a2 },
    { img: a15 },
    { img: s3 },
    { img: s4 },
    { img: s1 },
    { img: s2 },
    { img: s14 },
    { img: s16 },
    { img: s17 },
    { img: z5 },
    { img: s18 },
    { img: s19 },
    { img: s25 },
    { img: s29 },
    { img: s30 },
    { img: s31 },
    { img: s32 },
    { img: s33 },
  ];
  const data = [
    { img: a13 },
    { img: a14 },
    { img: a8 },
    { img: a4 },
    { img: a5 },
    { img: a6 },
    { img: a7 },
    { img: a3 },
    { img: a9 },
    { img: a10 },
    { img: a11 },
    { img: a12 },
    { img: a1 },
    { img: a2 },
    { img: a15 },
  ];
  const data2 = [
    { img: z1 },
    { img: z13 },
    { img: z3 },
    { img: z4 },
    { img: z5 },
    { img: z6 },
    { img: z7 },
    { img: z8 },
    { img: z9 },
    { img: z10 },
    { img: z11 },
    { img: z12 },
    { img: z2 },
    { img: z14 },
  ];
  const data3 = [
    { img: s5 },
    { img: s6 },
    { img: s34 },
    { img: s35 },
    { img: s36 },
    { img: s37 },
    { img: s3 },
    { img: s4 },
    { img: s1 },
    { img: s2 },
    { img: s7 },
    { img: s8 },
    { img: s9 },
    { img: s10 },
    { img: s11 },
    { img: s12 },
    { img: s13 },
    { img: s14 },
    { img: s15 },
    { img: s16 },
    { img: s17 },
    { img: s18 },
    { img: s19 },
    { img: s20 },
    { img: s21 },
    { img: s22 },
    { img: s23 },
    { img: s24 },
    { img: s25 },
    { img: s26 },
    { img: s27 },
    { img: s28 },
    { img: s29 },
    { img: s30 },
    { img: s31 },
    { img: s32 },
    { img: s33 },
  ];
  const [c, setC] = useState(data0);

  return (
    <div
      id="projects"
      className="
        container mx-auto  
        p-0
        flex flex-col 
         justify-center
        items-center
         gap-[20px]
        md:gap-[10%] text-white
        overflow-hidden md:mt-10 pt-8
        "
    >
      <div
        className="
            w-full  flex
            justify-center items-center
            gap-[10px]
            flex-wrap
            "
      >
        <button
          onClick={() => {
            setC(data0);
          }}
          className={c === data0 ? "btn check" : "btn"}
        >
          All
        </button>
        <button
          onClick={() => {
            setC(data);
          }}
          className={c === data ? "btn check" : "btn"}
        >
          Abaya
        </button>
        <button
          onClick={() => {
            setC(data2);
          }}
          className={c === data2 ? "btn check" : "btn"}
        >
          Wedding Dress{" "}
        </button>
        <button
          onClick={() => {
            setC(data3);
          }}
          className={c === data3 ? "btn check" : "btn"}
        >
          soiree{" "}
        </button>
      </div>
      <div
        initial={{ opacity: 0, x: 130 }}
        transition={{ duration: 2.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="
            p-4 md:px-0 xl:px-32
            w-full  
            flex flex-col 
            flex-wrap
            md:flex-row gap-[25px]
            justify-center items-center
            
            
            "
      >
        {/*         <Slider {...settings} className="w-full md:px-8">
        </Slider> */}
        {c.map((ele) => (
          <Oneproject key={ele.dec} dec={ele.dec} img={ele.img} />
        ))}
      </div>
    </div>
  );
}
