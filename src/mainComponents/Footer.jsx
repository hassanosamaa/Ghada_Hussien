export default function Footer(){
    return(
        <div className="
         mx-auto p-4
        flex flex-col md:flex-row
        justify-center
        md:gap-[15%] 
        gap-[10px]itmes-center
        text-gray-100
        bg-gray-900
        mt-8
        md:h-[15vh]
        dark:bg-gray-400

        
        ">
            <div className="text-gray-400 text-center p-4
            w-full dark:text-gray-900
            md:w-[40%]">Fashion Designer</div>
            <div className="flex 
                justify-center
                gap-[15px]
                items-center w-full 
                md:w-[30%]
                
                ">
                    <a href="https://www.facebook.com/share/MjgAxTm25cV1JQ3c/?mibextid=LQQJ4d"><i  className=" icon-facebook text-gray-500 dark:text-gray-900 text-[20px]  hover:text-[#1877f2]  "></i></a>
                    
                    <a href="https://www.instagram.com/amel.helaal?igsh=MmRhNWZnM3A2c2Fv"><i className=" fab fa-instagram text-gray-500 dark:text-gray-900  text-[20px]   hover:text-[#E4405F] transition duration-300"></i></a>

                    <a href="https://wa.me/+201000808240"><i className=" icon-whatsapp text-gray-500 text-[20px]   dark:text-gray-900  hover:text-[#25d366]  transition duration-300"></i></a>
                </div>
        </div>
    )
}