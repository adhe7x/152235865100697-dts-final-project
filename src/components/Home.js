import Logo from "../img/logo.png";
import GettingSkill from './GettingSkill';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();
    return (
        <div className="main container">
            <div className="section">
                <div className="col">
                    <img src={Logo} alt="myFoodRecepies"/>
                </div>
                <div className="col">
                    <h1 className="title">myFood<span>Recipes</span></h1>
                    <p className="info">
                    myFoodRecipes is a place where you found something you don't know about what ingredients you have to prepare. All foods and recipes are yours!
                    </p>
                    <button className="button" onClick={() => {navigate("/register")}}>REGISTER FOR FREE!</button>
                </div>
            </div>
            <GettingSkill />
        </div>
        
    )
}

export default Home;