import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BrandsEndPoint, baseURL } from "../../Api/api";

export const BrandsApi = createApi({
  reducerPath: "brandsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    // prepareHeaders: (headers, { getState }) => {
    //   if (jwt) {
    //     headers.set("Authorization", `Bearer ${jwt}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["Brands"],
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: (params = {}) => {
        const searchParams = new URLSearchParams(params);
        return `${BrandsEndPoint}?${searchParams.toString()}`;
      },
      providesTags: ["Brands"],
    }),
    getBrandById: builder.query({
      query: (id) => `${BrandsEndPoint}/${id}`,
      providesTags: ["Brands"],
    }),
    addBrand: builder.mutation({
      query: (newItemData) => ({
        url: `${BrandsEndPoint}`,
        method: "POST",
        body: newItemData,
      }),
      invalidatesTags: ["Brands"],
    }),
    updateBrand: builder.mutation({
      query: ({ id, formData }) => ({
        url: `${BrandsEndPoint}/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Brands"],
    }),
    deleteBrand: builder.mutation({
      query: (id) => ({
        url: `${BrandsEndPoint}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Brands"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetBrandsQuery,
  useAddBrandMutation,
  useUpdateBrandMutation,
  useGetBrandByIdQuery,
  useDeleteBrandMutation,
} = BrandsApi;
