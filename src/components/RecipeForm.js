import React from "react";

const RecipeForm = (props) => {
    const {values, submit, change} = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
      };

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
      };
      

return(
    <div>
        <h1>Paste Your Recipes: </h1>
        <form className="recipe-form" onSubmit={onSubmit}>
            <label>
                <input
                    id="url"
                    type="text"
                    name="url"
                    onChange={onChange}
                    value={values.url}
                />
            </label>
            <div className='submit'>
                    <button>Submit</button>
            </div>
        </form>
    </div>
)
}

export default RecipeForm;