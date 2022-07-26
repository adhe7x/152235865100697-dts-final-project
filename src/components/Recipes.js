import React, { useState, useCallback, useContext } from "react";
import { MyContext } from "../components/context";

const Recipes = () => {

    const [search, setSearch] = useState("");

    const { FetchRecipesMeals }  = useContext(MyContext) || {};

    const fetchMealsHandler = useCallback(() => {
        FetchRecipesMeals({search});
    }, [search, FetchRecipesMeals]);

    return (
        <div className="recipes main container">
            <div className="recipes-search">
                <input
                    type="text"
                    placeholder="Type a meal name ..."
                    value={search}
                    onChange={(text) => setSearch(text.target.value)}
                />
                <button onClick={fetchMealsHandler}>Search</button>
            </div>

            <div className="recipes-meals">

            </div>
        </div>
                
    )
}

export default Recipes;