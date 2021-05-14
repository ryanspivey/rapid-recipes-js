import React from "react";
import Recipe from './Recipe';

const RecipeList = (props) => {
    const {recipes} = props;
    return(
        <div>
            {recipes.map((recipe) => {
                return <Recipe recipe={recipe} />;
            })}
        </div>
    )
}

export default RecipeList;