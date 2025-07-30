// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getCookie } from 'cookies-next/client'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
    prepareHeaders: (headers, { getState }) => {
        const token = getCookie('access_token')

        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }

        return headers
    },
    credentials: 'include',
})

export const rootApi = createApi({
    reducerPath: 'rootApi',
    baseQuery: baseQuery,
    tagTypes: [
        'Category',
        'Product',
        'Upload',
        'Favorites'
    ],
    endpoints: (build) => ({
        
    }),
})
