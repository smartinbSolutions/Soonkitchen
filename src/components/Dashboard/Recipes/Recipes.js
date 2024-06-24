import React, { useEffect, useState } from "react";
import { PencilFill, Plus } from "react-bootstrap-icons";

import "./Recipes.css";
import meal from "../../../Assets/images/slider2.png";

import SubmitRecipeForm from "./submitRecipeForm";
import { useGetBrandByIdQuery } from "../../../RTK/API/BrandsApi";
import { useDeleteRecipeMutation } from "../../../RTK/API/RecipesApi";
import { Button, Modal } from "react-bootstrap";

const Recipes = ({ Recipes, labels, BrandID }) => {
  const [selectedRecipe, setselectedRecipe] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [recipeId, setrecipeId] = useState("");
  const [searchKeyword, setsearchKeyword] = useState("");
  const { data: BrandData, refetch } = useGetBrandByIdQuery(BrandID);
  const [deleteRecipe, { isLoading, isError }] = useDeleteRecipeMutation();

  const handleEdit = (recipe) => {
    setselectedRecipe(recipe);
    setFormVisible(true);
  };
  const handleDelete = async () => {
    try {
      await deleteRecipe(recipeId);
      setShowModal(false);
      refetch();
    } catch (error) {
      console.error("Failed to delete recipe:", error);
    }
  };
  const filteredRecipes = BrandData?.data?.recipe?.filter((item) =>
    item.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const recipesToDisplay = searchKeyword
    ? filteredRecipes
    : BrandData?.data?.recipe;
  return (
    <div className="Recipes">
      <div className="d-flex recipe_info">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{ width: "40%" }}
          onChange={(e) => setsearchKeyword(e.target.value)}
        ></input>
        <button
          className="btn btn-primary"
          onClick={() => setFormVisible(true)}
        >
          Add recipe
          <Plus color="#fff" size={24} />
        </button>
      </div>
      <div className="Recipes_container">
        {recipesToDisplay?.map((item, index) => (
          <div key={index} className={`recipe_card `}>
            <div className="Recipe_img">
              <img src={item?.images[0] || meal} alt="" />
            </div>
            <div className="Recipe_info">
              <h6>{item?.name}</h6>
              <p>{item?.labelsName || "No label"}</p>
            </div>

            <div className="price">
              <span>
                {item?.price} <span id="currency">₺</span>
              </span>
            </div>
            <div className="actions">
              <button onClick={() => handleEdit(item)}>update</button>
              <button
                type="button"
                onClick={() => {
                  setShowModal(true);
                  setrecipeId(item?._id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isFormVisible && (
        <SubmitRecipeForm
          onCancel={() => {
            setFormVisible(false);
            setselectedRecipe(null);
          }}
          recipe={selectedRecipe}
          ingredients={BrandData?.data?.ingredients}
          BrandID={BrandID}
          onTrigger={() => refetch()}
        />
      )}
      {/* <!-- Modal --> */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this recipe?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDelete} disabled={isLoading}>
            {isLoading ? "Deleting..." : "Confirm Delete"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Recipes;
