import PropTypes from "prop-types";

export default function Oneproject({ img }) {
  return (
    <div
      className="
                w-full md:w-[35%]
                flex flex-col overflow-hidden
                p-[5px]
                justify-center items-start
                 rounded-xl
                shadow-lg
                 shadow-gray-800
                 hover:shadow-sky-500
                 transition duration-300
                bg-sky-950"
    >
      <div className="w-full h-[420px] md:h-[370px] ">
        <img
          className="w-full  rounded-xl
                    h-full"
          src={img}
          alt="img"
        />
      </div>
      
      
    </div>
  );
}

Oneproject.propTypes = {
  img: PropTypes.string.isRequired,
};
