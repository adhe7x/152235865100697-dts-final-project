import Skill from "../img/skill.jpg";
import { useNavigate } from 'react-router-dom';

function GettingSkill() {
    
    const navigate = useNavigate();

    const skillList = [
        "Learn new and latest recipes",
        "Get cooking tips",
        "Experiment with foods",
        "Improve your cooking skill",
        "Foods all around the world",
        "Everithing is FREE"
    ]

    return (
        <div className="section">
            <div className="col">
                <h1 className="title">What Will You Get?</h1>
                {
                    skillList.map((item, index) => (
                        <p className="info getting" key={index}>{item}</p>
                    ))
                }
                <button className="button explore" onClick={() => {navigate("/recipes")}}>EXPLORE RECIPES</button>
            </div>            
            <div className="col">
                <img className="skill" src={Skill} alt="Skill"/>
            </div>
        </div>
    )
}

export default GettingSkill;