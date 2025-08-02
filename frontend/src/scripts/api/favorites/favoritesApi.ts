import { isNumberObject } from "util/types";
import { rootApi } from "../rootApi";

export const favoritesApi = rootApi.injectEndpoints({
    endpoints: (build) => ({
        sendFavorites: build.mutation<void, any>({
            query: (body: any) => ({
                url: `/favorites`,
                body: body,
                method: "POST"
            }),
            invalidatesTags: ["Favorites"]
        }),
        removeFavorites: build.mutation<void, any>({
            query: (body: any) => ({
                url: `/favorites`,
                body: body,
                method: "DELETE"
            }),
            invalidatesTags: ["Favorites"]
        }),
        getAllFavorites: build.query<any, any>({
            query: () => ({
                url: `/favorites`,
            }),
            providesTags: ["Favorites"]
        }),
        getCountFavorites: build.query<any, any>({
            query: () => ({
                url: `/favorites/count`,
            }),
            providesTags: ["Favorites"]
        }),
    })
})

export const {
    useGetCountFavoritesQuery,
    useRemoveFavoritesMutation,
    useSendFavoritesMutation,
    useGetAllFavoritesQuery
} = favoritesApi