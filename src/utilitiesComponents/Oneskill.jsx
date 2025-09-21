import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
export default function Oneskill({name,img}){
    return(
        <motion.div initial={{scale:0.5,opacity:0}}
        transition={{duration:0.5}}
        whileInView={{scale:1,opacity:2}}
        className="flex flex-col justify-center
        items-center gap-[5px]
        rounded-xl text-white
        w-full md:w-[100%]
        bg-gray-900 
        hover:border-sky-900
        hover:bg-gray-800
        tansition duration-300
        shadow-lg
        shadow-sky-950
        hover:shadow-sky-500 h-[200px] p-[20px]
        
        group">
            <div className='skill group-hover:scale-110 
            transition duration-300 cursor-pointer w-[90%] h-[80%] p-[20px] pb-0 '
             >
            <img src={img} className='w-full h-full'
            
              /></div>
            <div className="font-bold dark:text-gray-100 text-[15px]
            text-gray-300 tracking-wider p-[10px] text-center">{name}</div>

        </motion.div>
    )
}
Oneskill.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }