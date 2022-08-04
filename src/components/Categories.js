import React, { useEffect, useContext } from 'react';
import { myContext } from './context';
import { useNavigate } from 'react-router-dom';

function Categories() {

    const navigate = useNavigate();
    const { fetchCategories, categories } = useContext(myContext);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories])

    return (
        <div className='categories recipes-grid main container'>
            {categories.map(
                (category) => (
                    <div className="meals" key={category?.strCategory} onClick={() => {navigate(`/${category.strCategory}`)}}>
                        <img
                            src={category.strCategoryThumb}
                            alt={category.strCategory}
                        />
                        <h5>{category.strCategory}</h5>
                    </div>
                ))
            }
        </div>
    )
}

export default Categories;