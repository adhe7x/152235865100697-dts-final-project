import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import YouTube from 'react-youtube';

let vId = "";

function RecipesInfo() {
    
    const baseUrl = "https://www.themealdb.com/api/json/v1/1/";
    const [ item, setItem ] = useState();
    const [ activeTab, setActiveTab ] = useState("instructions");
    const { MealId } = useParams();

    if(MealId !== "") {
        fetch(`${baseUrl}lookup.php?i=${MealId}`)
        .then(res => res.json())
        .then(data => {
            setItem(data.meals[0]);
            }
        )
    }

     if(item) {
        const url = item.strYoutube;
        const str = url.split("=");
        vId = str[str.length-1];
    }

    return (

        <div className='main container'>
            <div className='recipes-info'>
            {
                (!item) ? "" : 
                    <div key={item.idMeal}>
                        <img
                            src={item.strMealThumb}
                            alt={item.strMeal}
                        />
                        <h2>{item.strMeal}</h2>
                        <h3>{item.strArea} Food</h3>
                        <h4>{item.strCategory} Dish</h4>                        
                        <button
                            className={activeTab === "instructions" ? "active" : ""}
                            onClick={() => setActiveTab("instructions")}>
                                Instructions
                        </button>
                        <button
                            className={activeTab === "ingredients" ? "active" : ""}
                            onClick={() => setActiveTab("ingredients")}>
                                Ingredients
                        </button>
                        <button
                            className={activeTab === "video" ? "active" : ""}
                            onClick={() => setActiveTab("video")}>
                                Video
                        </button>
                        <div>
                        { activeTab === "ingredients" &&
                        <div className='ingredients'>
                            <p>{item.strIngredient1} {item.strMeasure1}</p>
                            <p>{item.strIngredient2} {item.strMeasure2}</p>
                            <p>{item.strIngredient3} {item.strMeasure3}</p>
                            <p>{item.strIngredient4} {item.strMeasure4}</p>
                            <p>{item.strIngredient5} {item.strMeasure5}</p>
                            <p>{item.strIngredient6} {item.strMeasure6}</p>
                            <p>{item.strIngredient7} {item.strMeasure7}</p>
                            <p>{item.strIngredient8} {item.strMeasure8}</p>
                            <p>{item.strIngredient9} {item.strMeasure9}</p>
                            <p>{item.strIngredient10} {item.strMeasure10}</p>
                            <p>{item.strIngredient11} {item.strMeasure11}</p>
                            <p>{item.strIngredient12} {item.strMeasure12}</p>
                            <p>{item.strIngredient13} {item.strMeasure13}</p>
                        </div>
                        }
                        
                        { activeTab === "instructions" &&
                            <p className='instructions'>{item.strInstructions}</p>
                        }
                        { activeTab === "video" &&
                        <YouTube
                            className="video"
                            videoId={vId}
                            play="true" // control playback of video with true/false
                            fullscreen="true" // control whether the video should play in fullscreen or inline
                            loop="false" // control whether the video should loop when ended
                            onReady={e => this.setState({ isReady: true })}
                            onChangeState={e => this.setState({ status: e.state })}
                            onChangeQuality={e => this.setState({ quality: e.quality })}
                            onError={e => this.setState({ error: e.error })}
                        />     
                         }                 
                        </div>                                               
                    </div>
            }
            </div> 
        </div>
    )
}

export default RecipesInfo;