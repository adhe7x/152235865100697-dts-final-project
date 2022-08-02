import React, { useState, useCallback, useContext } from "react";
import { myContext } from "./context";

function Recipes() {
    
    const {fetchRecipesMeals, meals}  = useContext(myContext);
    const [search, setSearch] = useState("");

    const fetchMealsHandler = useCallback(() => {
        fetchRecipesMeals(search);
    }, [search, fetchRecipesMeals]);

    return (
        <div className="recipes main container">
            <div className="recipes-search">
                <input
                    type="text"
                    placeholder="Type a meal name ..."
                    value={search}
                    onChange={(text) => setSearch(text.target.value)}
                    onKeyPress={e => {
                        if(e.key === 'Enter') {
                                fetchMealsHandler();
                            }
                        }
                    }
                />
                <button className="button" onClick={fetchMealsHandler}>Search</button>
            </div>

            <div className="recipes-grid">
                {meals ? meals.map(
                    ((meal) => 
                        <div className="meals" key={meal.idMeal}>
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                            />
                            <h5>{meal.strMeal}</h5>
                        </div>
                    )) : <h4>Cannot find your meals! Try another . . .</h4>
                }
            </div>
        </div>
                
    )
}

export default Recipes;