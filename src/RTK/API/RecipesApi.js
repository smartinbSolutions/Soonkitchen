import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RecipesEndPoint, baseURL } from "../../Api/api";

export const RecipeApi = createApi({
  reducerPath: "RecipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    // prepareHeaders: (headers, { getState }) => {
    //   if (jwt) {
    //     headers.set("Authorization", `Bearer ${jwt}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["Recipes"],
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: (params = {}) => {
        const searchParams = new URLSearchParams(params);
        return `${RecipesEndPoint}?${searchParams.toString()}`;
      },
      providesTags: ["Recipes"],
    }),
    getRecipeById: builder.query({
      query: (id) => `${RecipesEndPoint}/${id}`,
      providesTags: ["Recipes"],
    }),
    addRecipe: builder.mutation({
      query: ({ id, formData }) => ({
        url: `${RecipesEndPoint}/${id}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Recipes"],
    }),
    updateRecipe: builder.mutation({
      query: ({ id, formData }) => ({
        url: `${RecipesEndPoint}/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Recipes"],
    }),
    deleteRecipe: builder.mutation({
      query: (id) => ({
        url: `${RecipesEndPoint}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Recipes"],
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useLazyGetRecipeByIdQuery,
  useAddRecipeMutation,
  useUpdateRecipeMutation,
  useDeleteRecipeMutation,
} = RecipeApi;
