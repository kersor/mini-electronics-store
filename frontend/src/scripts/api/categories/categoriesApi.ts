import { isNumberObject } from "util/types";
import { rootApi } from "../rootApi";

export const categoriesApi = rootApi.injectEndpoints({
    endpoints: (build) => ({
        createCategories: build.mutation<any, any>({
            query: (body: any) => ({
                url: '/category',
                method: "POST",
                body: body
            }),
            invalidatesTags: ["Category"]
        }),
        deleteCategories: build.mutation<void, number>({
            query: (id: number)  => ({
                url: `/category/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Category"]
        }),
        updateCategories: build.mutation<any, any>({
            query: (body: any) => ({
                url: `/category/${body.id}`,
                method: "PUT",
                body: body.payload
            }),
            invalidatesTags: ["Category"]
        }),
        getAllCategories: build.query<any, void>({
            query: (body: any) => ({
                url: '/category',
            }),
            providesTags: ["Category"]
        }),
    })
})

export const {
    useUpdateCategoriesMutation,
    useDeleteCategoriesMutation,
    useCreateCategoriesMutation,
    useGetAllCategoriesQuery
} = categoriesApi