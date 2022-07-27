import React, { createContext, useCallback, useState } from "react";
import axios from "axios";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";

export const myContext = createContext();

export const AppContext = ({children}) => {

    const [meals, setMeals] = useState([]);
    const [categories, setCategories] = useState([]);

    const fetchRecipesMeals = useCallback((search) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => {
            console.log(res.data.meals);
            setMeals(res.data.meals);
        })

    }, [])

    return <myContext.Provider value={{fetchRecipesMeals, meals}}>{children}</myContext.Provider>;
};