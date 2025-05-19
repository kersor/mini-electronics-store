import { isNumberObject } from "util/types";
import { rootApi } from "../rootApi";

export const authApi = rootApi.injectEndpoints({
    endpoints: (build) => ({
        register: build.mutation<any, any>({
            query: (body: any) => ({
                url: '/auth/register',
                method: "POST",
                body: body
            }),
        }),
        login: build.mutation<any, any>({
            query: (body: any) => ({
                url: '/auth/login',
                method: "POST",
                body: body
            }),
        }),
    })
})

export const {
    useLoginMutation,
    useRegisterMutation
} = authApi

