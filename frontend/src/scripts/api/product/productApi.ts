import { isNumberObject } from "util/types";
import { rootApi } from "../rootApi";

export const productApi = rootApi.injectEndpoints({
    endpoints: (build) => ({
        createProduct: build.mutation<any, any>({
            query: (body: any) => ({
                url: '/product',
                method: "POST",
                body
            }),
            invalidatesTags: ['Product']
        }),
        getAllProducts: build.query<any, void>({
            query: () => ({
                url: "/product"
            }),
            providesTags: ['Product']
        }),
        updateProduct: build.mutation<any, any>({
            query: (body: any) => ({
                url: `/product/${body.id}`,
                method: "PATCH",
                body: body.payload
            }),
            invalidatesTags: ["Product"]
        }),
        deleteProduct: build.mutation<void, string>({
            query: (id: string) => ({
                url: `/product/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Product"]
        }),
        updateCount: build.mutation<any, any>({
            query: (body: any) => ({
                url: `/product/count/${body.id}`,
                method: "PATCH",
                body: body.payload
            }),
            invalidatesTags: ["Product"]
        }),

    })
})

export const {
    useUpdateCountMutation,
    useUpdateProductMutation,
    useCreateProductMutation,
    useGetAllProductsQuery,
    useDeleteProductMutation
} = productApi

