import React, { useEffect, useState } from "react";
import {
  useAddRecipeMutation,
  useUpdateRecipeMutation,
} from "../../../RTK/API/RecipesApi";
import { XCircle } from "react-bootstrap-icons";
import { useGetBrandByIdQuery } from "../../../RTK/API/BrandsApi";
import Dropzone from "react-dropzone-uploader";

const SubmitRecipeForm = ({
  recipe,
  ingredients,
  onCancel,
  BrandID,
  onTrigger,
}) => {
  const [RecipeName, setRecipeName] = useState("");
  const [RecipeDesc, setRecipeDesc] = useState("");
  const [RecipePrice, setRecipePrice] = useState("");
  const [selectedLabel, setSelectedLabel] = useState(recipe?.labelsName || "");
  const [RecipeImages, setRecipeImages] = useState([]);
  const [Ingredients, setIngredients] = useState("");
  // RTK Queries
  const { data: BrandData } = useGetBrandByIdQuery(BrandID);
  const [AddRecipe, { isLoading: isAdding, error: NewRecipeError }] =
    useAddRecipeMutation();
  const [updataRecipe, { isLoading: isUpdating, error: updatedRecipeError }] =
    useUpdateRecipeMutation();

  useEffect(() => {
    console.log(recipe);
    if (recipe) {
      console.log(recipe);
      setRecipeName(recipe?.name);
      setRecipeDesc(recipe?.desc);
      setRecipePrice(recipe?.price);
      setIngredients(recipe?.ingredients);
    }
  }, [recipe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", RecipeName);
    formData.append("desc", RecipeDesc);
    formData.append("price", RecipePrice);
    formData.append("ingredients", Ingredients);
    formData.append("labelsName", selectedLabel);
    RecipeImages.forEach((file) => {
      formData.append("images", file);
    });
    // Debugging logs to check FormData contents
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      if (recipe) {
        console.log(recipe);
        await updataRecipe({ id: recipe?._id, formData });
      } else {
        console.log(recipe);
        await AddRecipe({ id: BrandID, formData });
      }
      // Handle success, e.g., reset form
      setRecipeName("");
      setRecipeDesc("");
      setIngredients("");
      onCancel(); // Close the form after successful submission
      onTrigger();
    } catch (error) {
      // Handle error
      console.error("Failed to add Recipe:", error.message);
    }
  };
  const handleChangeStatus = ({ meta, file }, status) => {
    if (status === "done") {
      setRecipeImages((prev) => [...prev, file]);
      const fileURL = URL.createObjectURL(file);
      console.log("File URL:", `${fileURL}.png`);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="AddBrandForm">
      <h2>{recipe ? "updata Recipe" : "Add Recipe"}</h2>
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
        placeholder="Enter Recipe Desc"
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
        <option value="">Choose recipe Label</option>
        {BrandData?.data?.labels?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      <textarea
        type="text"
        value={Ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter Recipe ingredients"
      />
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
        {recipe ? "updata Recipe" : "Add Recipe"}
      </button>
      <XCircle color="#0355ec" size={30} className="exit" onClick={onCancel} />
      {(isAdding || isUpdating) && <p>Submitting Recipe...</p>}
      {NewRecipeError && <p>{NewRecipeError?.message}</p>}
      {updatedRecipeError && <p>{updatedRecipeError?.message}</p>}
    </form>
  );
};

export default SubmitRecipeForm;
