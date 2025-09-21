import Oneskill from "../utilitiesComponents/Oneskill"
import skill1 from '../imges/skills/creativeDirector.png'
import skill2 from '../imges/skills/designing.png'
import skill3 from '../imges/skills/draping.png'
import skill4 from '../imges/skills/patternMaking.png'
import skill5 from '../imges/skills/prefessionalFashionExperience.png'
import skill6 from '../imges/skills/sewing.png'
import skill7 from '../imges/skills/sketchingDesigns.png'
import skill8 from '../imges/skills/styling.png'
import skill9 from '../imges/skills/textilesDesign.png'
import skill10 from '../imges/skills/trendforcasting.png'

export default function Skills(){
    const data=[
        {name:"Creative Fashion Designer" ,img:skill1},
        {name:"Designing" ,img:skill2},
        {name:"Draping " ,img:skill3},
        {name:"Pattern Making" ,img:skill4},
        {name:"Fashion Experience" ,img:skill5},
        {name:"Sewing & Technical Knowledge" ,img:skill6},
        {name:"Sketching Designs" ,img:skill7},
        {name:"Styling" ,img:skill8},
        {name:"Fabric Design" ,img:skill9},
        {name:"Trend For Casting" ,img:skill10},
       ]
    return(
        
        <div id="skills"
        className="container mx-auto  
         px-4 md:p-16
        grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5
        place-itens-center gap-[25px] md:mt-10
        pt-8
         "> 
        {data.map((ele)=>(
            <Oneskill key={ele.name}
            name={ele.name}
            img={ele.img}/>
        ))}
        </div>
    )
}