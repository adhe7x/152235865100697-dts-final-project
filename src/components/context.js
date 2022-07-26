import React, { createContext, useCallback, useState } from "react";
import axios from "axios";

export const MyContext = createContext();

export const AppContext = ({children}) => {

    const [meals, setMeals] = useState([]);
    const [categories, setCategories] = useState([]);

    const FetchRecipesMeals = useCallback((search) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(response => {
            console.log(response.data);
        })

    }, [])

    return <MyContext.Provider value={FetchRecipesMeals}>{children}</MyContext.Provider>;
};