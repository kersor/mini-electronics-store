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
    })
})

export const {
    useCreateProductMutation
} = productApi

