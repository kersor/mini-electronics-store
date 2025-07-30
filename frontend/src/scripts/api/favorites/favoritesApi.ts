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
        getAllFavorites: build.query<any, void>({
            query: () => ({
                url: `/favorites`,
            }),
            providesTags: ["Favorites"]
        }),
    })
})

export const {
    useRemoveFavoritesMutation,
    useSendFavoritesMutation,
    useGetAllFavoritesQuery
} = favoritesApi