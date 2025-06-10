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
        deleteCharacteristic: build.mutation<void, number>({
            query: (id: number)  => ({
                url: `/characteristic/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Characteristic"]
        }),
        updateCharacteristic: build.mutation<any, any>({
            query: (body: any) => ({
                url: `/characteristic/${body.id}`,
                method: "PUT",
                body: body.payload
            }),
            invalidatesTags: ["Characteristic"]
        }),
        getAllCharacteristics: build.query<any, void>({
            query: (body: any) => ({
                url: '/characteristic',
            }),
            providesTags: ["Characteristic"]
        }),
    })
})

export const {
    useUpdateCharacteristicMutation,
    useDeleteCharacteristicMutation,
    useGetAllCharacteristicsQuery,
    useCreateCharacteristicMutation
} = characteristicApi