import React from "react";

const Recipe = (props) => {
    const {recipe} = props;
    return(
        <div>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name}/>
            <h2>Ingredients: </h2>
            {recipe.ingredients.map((ingredient) => {
                return <p>{ingredient}</p>;
            })}
            
        </div>
    )
}

export default Recipe;