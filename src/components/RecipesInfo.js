import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function RecipesInfo() {

    const [item, setItem] = useState();
    const { MealId } = useParams();

    if(MealId !== "") {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res => res.json())
        .then(data => {
            setItem(data.meals[0]);
            }
        )
    }

    return (

        <div className='main container'>
            <div className='recipes-info'>
            {item &&
                    <div className="info" key={item.idMeal}>
                        <img
                            src={item.strMealThumb}
                            alt={item.strMeal}
                        />
                        <h2>{item.strMeal}</h2>
                        <h3>{item.strArea} Food</h3>
                        <h4>{item.strCategory} Dish</h4>
                    </div>
            }
            </div>
            
        </div>
    )
}

export default RecipesInfo;