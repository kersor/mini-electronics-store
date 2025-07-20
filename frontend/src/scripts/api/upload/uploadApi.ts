import { isNumberObject } from "util/types";
import { rootApi } from "../rootApi";

export const uploadApi = rootApi.injectEndpoints({
    endpoints: (build) => ({
        uploadPhoto: build.mutation<any, any>({
            query: (body: any) => ({
                url: '/upload/photo',
                method: "POST",
                body,
            }),
            invalidatesTags: ['Upload']
        }),
    })
})

export const {
    useUploadPhotoMutation
} = uploadApi

