// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:5000/api', 
        credentials: 'include',
    }),
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
    }),
})

export const { 
    useRegisterMutation,
    useLoginMutation
} = api