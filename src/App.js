import './App.css';
import RecipeForm from './components/RecipeForm'
import RecipeList from './components/RecipeList'
import React, { useState } from "react";
import axios from 'axios';


const initialFormValues = {
  url: "",
};

const initialRecipes = [];


function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [recipes, setRecipes] = useState(initialRecipes);

  //HELPERS

  const postNewRecipe = (url) => {
    axios
      .post(`http://127.0.0.1:5000/?url=${url}`)
      .then((res) => {
        setRecipes([res.data, ...recipes]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formSubmit = () => {
    const url = formValues.url.trim();
    
    // 🔥 STEP 8- POST NEW RECIPE USING HELPER
    postNewRecipe(url);
    console.log(recipes);
  };
  

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  return (
    <div className="App">
      <button>Currate List</button>
      <RecipeForm values={formValues} change={inputChange} submit={formSubmit}/>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
