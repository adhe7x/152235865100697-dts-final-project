import Logo from "../logo.png";

function Home() {
    return (
        <div className="section">
            <div className="col">
                <img className="logo" src={Logo} />
            </div>
            <div className="col">
                <h1 className="title">About myFood<span>Recipes</span></h1>
                <p className="info">
                    myFoodRecipes is a place where you found something you don't know about what ingredients you have to prepare. All foods and recipes are yours!
                </p>
                <button className="button">REGISTER FOR FREE!</button>
            </div>

        </div>
    )
}

export default Home;