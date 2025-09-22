import OneSkill from "../utilitiesComponents/Oneskill";

const SkillsPage = () => {
  const data = [
    { name: "Creative Fashion Designer", img: "" },
    { name: "Designing", img: "" },
    { name: "Draping ", img: "" },
    { name: "Pattern Making", img: "" },
    { name: "Fashion Experience", img: "" },
    { name: "Sewing & Technical Knowledge", img: "" },
    { name: "Sketching Designs", img: "" },
    { name: "Styling", img: "" },
    { name: "Fabric Design", img: "" },
    { name: "Trend For Casting", img: "" },
  ];
  return (
    <div
      id="skills"
      className="container mx-auto  
         px-4 md:p-16
        grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5
        place-items-center gap-[25px] md:mt-10
        pt-8
         "
    >
      {data.map((ele) => (
        <OneSkill key={ele.name} name={ele.name} img={ele.img} />
      ))}
    </div>
  );
};

export default SkillsPage;
