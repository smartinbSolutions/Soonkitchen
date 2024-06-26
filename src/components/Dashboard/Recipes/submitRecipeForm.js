import React, { useEffect, useState } from "react";
import {
  useAddRecipeMutation,
  useUpdateRecipeMutation,
} from "../../../RTK/API/RecipesApi";
import { DashCircle, XCircle } from "react-bootstrap-icons";
import { useGetBrandByIdQuery } from "../../../RTK/API/BrandsApi";
import Dropzone from "react-dropzone-uploader";

const SubmitRecipeForm = ({ recipe, onCancel, BrandID, onTrigger }) => {
  const [RecipeName, setRecipeName] = useState("");
  const [RecipeDesc, setRecipeDesc] = useState("");
  const [RecipePrice, setRecipePrice] = useState("");
  const [selectedLabel, setSelectedLabel] = useState(recipe?.labelsName || "");
  const [RecipeImages, setRecipeImages] = useState([]);
  const [Ingredients, setIngredients] = useState([
    { name: "", calories: "", weight: "" },
  ]);

  // RTK Queries
  const { data: BrandData } = useGetBrandByIdQuery(BrandID);
  const [AddRecipe, { isLoading: isAdding, error: NewRecipeError }] =
    useAddRecipeMutation();
  const [updateRecipe, { isLoading: isUpdating, error: updatedRecipeError }] =
    useUpdateRecipeMutation();

  useEffect(() => {
    if (recipe) {
      setRecipeName(recipe?.name);
      setRecipeDesc(recipe?.desc);
      setRecipePrice(recipe?.price);
      setIngredients(
        recipe?.ingredients || [{ name: "", calories: "", weight: "" }]
      );
    }
  }, [recipe]);

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...Ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([...Ingredients, { name: "", calories: "", weight: "" }]);
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = Ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", RecipeName);
    formData.append("desc", RecipeDesc);
    formData.append("price", RecipePrice);
    formData.append("labelsName", selectedLabel);
    // Append each ingredient in the format ingredients[0][name], etc.
    Ingredients.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}][name]`, ingredient.name);
      formData.append(`ingredients[${index}][calories]`, ingredient.calories);
      formData.append(`ingredients[${index}][weight]`, ingredient.weight);
    });
    RecipeImages.forEach((file) => {
      formData.append("images", file);
    });

    try {
      if (recipe) {
        await updateRecipe({ id: recipe?._id, formData });
      } else {
        await AddRecipe({ id: BrandID, formData });
      }
      setRecipeName("");
      setRecipeDesc("");
      setRecipePrice("");
      setIngredients([{ name: "", calories: "", weight: "" }]);
      onCancel();
      onTrigger();
    } catch (error) {
      console.error("Failed to add Recipe:", error.message);
    }
  };

  const handleChangeStatus = ({ meta, file }, status) => {
    if (status === "done") {
      setRecipeImages((prev) => [...prev, file]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="AddBrandForm">
      <h4>{recipe ? "Update Recipe" : "Add Recipe"}</h4>
      <input
        type="text"
        value={RecipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        placeholder="Enter Recipe name"
        required
      />
      <textarea
        type="text"
        value={RecipeDesc}
        onChange={(e) => setRecipeDesc(e.target.value)}
        placeholder="Enter Recipe Description"
      />
      <input
        type="text"
        value={RecipePrice}
        onChange={(e) => setRecipePrice(e.target.value)}
        placeholder="Enter Recipe Price"
        required
      />
      <select
        className="form-select"
        value={selectedLabel}
        onChange={(e) => setSelectedLabel(e.target.value)}
      >
        <option value="">Choose Recipe Label</option>
        {BrandData?.data?.labels?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <h6>Ingredients</h6>
      {Ingredients?.map((ingredient, index) => (
        <div key={index} className="ingredient-inputs">
          <input
            id="IngInput"
            type="text"
            value={ingredient?.name}
            onChange={(e) =>
              handleIngredientChange(index, "name", e.target.value)
            }
            placeholder="Ingredient Name"
            required
          />
          <input
            id="IngInput"
            type="text"
            value={ingredient?.calories}
            onChange={(e) =>
              handleIngredientChange(index, "calories", e.target.value)
            }
            placeholder="Calories"
            required
          />
          <input
            id="IngInput"
            type="text"
            value={ingredient?.weight}
            onChange={(e) =>
              handleIngredientChange(index, "weight", e.target.value)
            }
            placeholder="Weight"
            required
          />
          {Ingredients.length > 1 && (
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleRemoveIngredient(index)}
            >
              <DashCircle />
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleAddIngredient}
        style={{ fontSize: "12px" }}
      >
        Add Ingredient
      </button>

      <Dropzone
        onChangeStatus={handleChangeStatus}
        accept="image/*"
        maxFiles={5}
        inputContent="Drop your images here"
        styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
      />

      <button
        type="submit"
        className="btn btn-primary"
        disabled={isAdding || isUpdating}
      >
        {recipe ? "Update Recipe" : "Add Recipe"}
      </button>
      <XCircle color="#0355ec" size={30} className="exit" onClick={onCancel} />
      {(isAdding || isUpdating) && <p>Submitting Recipe...</p>}
      {NewRecipeError && <p>{NewRecipeError?.message}</p>}
      {updatedRecipeError && <p>{updatedRecipeError?.message}</p>}
    </form>
  );
};

export default SubmitRecipeForm;
