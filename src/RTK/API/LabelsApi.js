import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LabelsEndPoint, baseURL } from "../../Api/api";

export const LabelsApi = createApi({
  reducerPath: "labelsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    // prepareHeaders: (headers, { getState }) => {
    //   if (jwt) {
    //     headers.set("Authorization", `Bearer ${jwt}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["Labels"],
  endpoints: (builder) => ({
    getLabels: builder.query({
      query: (params = {}) => {
        const searchParams = new URLSearchParams(params);
        return `${LabelsEndPoint}?${searchParams.toString()}`;
      },
      providesTags: ["Labels"],
    }),
    getLabelById: builder.query({
      query: (id) => `${LabelsEndPoint}/${id}`,
      providesTags: ["Labels"],
    }),
    addLabel: builder.mutation({
      query: (newItemData) => ({
        url: `${LabelsEndPoint}`,
        method: "POST",
        body: newItemData,
      }),
      invalidatesTags: ["Labels"],
    }),
    updateLabel: builder.mutation({
      query: ({ id, formData }) => ({
        url: `${LabelsEndPoint}/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Labels"],
    }),
    deleteLabel: builder.mutation({
      query: (id) => ({
        url: `${LabelsEndPoint}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Labels"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetLabelsQuery,
  useGetLabelByIdQuery,
  useAddLabelMutation,
  useUpdateLabelMutation,
  useDeleteLabelMutation,
} = LabelsApi;
