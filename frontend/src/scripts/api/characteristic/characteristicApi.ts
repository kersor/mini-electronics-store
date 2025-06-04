import { isNumberObject } from "util/types";
import { rootApi } from "../rootApi";

export const characteristicApi = rootApi.injectEndpoints({
    endpoints: (build) => ({
        createCharacteristic: build.mutation<any, any>({
            query: (body: any) => ({
                url: '/characteristic',
                method: "POST",
                body: body
            }),
            invalidatesTags: ["Characteristic"]
        }),
        // deleteCategories: build.mutation<void, number>({
        //     query: (id: number)  => ({
        //         url: `/category/${id}`,
        //         method: "DELETE"
        //     }),
        //     invalidatesTags: ["Characteristic"]
        // }),
        // updateCategories: build.mutation<any, any>({
        //     query: (body: any) => ({
        //         url: `/category/${body.id}`,
        //         method: "PUT",
        //         body: body.payload
        //     }),
        //     invalidatesTags: ["Characteristic"]
        // }),
        getAllCharacteristics: build.query<any, void>({
            query: (body: any) => ({
                url: '/characteristic',
            }),
            providesTags: ["Characteristic"]
        }),
    })
})

export const {
    // useUpdateCategoriesMutation,
    // useDeleteCategoriesMutation,
    // useCreateCategoriesMutation,
    // useGetAllCategoriesQuery
    useGetAllCharacteristicsQuery,
    useCreateCharacteristicMutation
} = characteristicApi