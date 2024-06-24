import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { BrandsApi } from "./API/BrandsApi";
import { LabelsApi } from "./API/LabelsApi";
import { RecipeApi } from "./API/RecipesApi";

export const store = configureStore({
  reducer: {
    [BrandsApi.reducerPath]: BrandsApi.reducer,
    [LabelsApi.reducerPath]: LabelsApi.reducer,
    [RecipeApi.reducerPath]: RecipeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(BrandsApi.middleware)
      .concat(LabelsApi.middleware)
      .concat(RecipeApi.middleware),
});

setupListeners(store.dispatch);
