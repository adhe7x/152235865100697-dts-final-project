import Skill from "../img/skill.jpg";

function GettingSkill() {
    
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
                <button className="button explore">EXPLORE RECIPES</button>
            </div>            
            <div className="col">
                <img className="skill" src={Skill} alt="Skill"/>
            </div>
        </div>
    )
}

export default GettingSkill;