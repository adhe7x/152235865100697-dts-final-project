import React, { createContext, useCallback, useState } from "react";
import axios from "axios";

export const myContext = createContext();

export function AppContext({children}) {

    const baseUrl = "https://www.themealdb.com/api/json/v1/1/";
    const [meals, setMeals] = useState([]);
    const [categories, setCategories] = useState([]);

    const fetchRecipesMeals = useCallback((search) => {
        axios
            .get(`${baseUrl}search.php?s=${search}`)
            .then(res => {
                console.log(res.data.meals);
                setMeals(res.data.meals);
        })

    }, [])

    const fetchCategories = useCallback(() => {
        axios
            .get(`${baseUrl}categories.php`)
            .then(res => {
                console.log(res.data.categories);
                setCategories(res.data.categories);
            })
    }, [])

    
    return <myContext.Provider
                value={
                    {
                        fetchRecipesMeals,
                        meals,
                        fetchCategories,
                        categories,                        
                    }}
                >
                {children}
            </myContext.Provider>;
};