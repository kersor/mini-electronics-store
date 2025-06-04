// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rootApi = createApi({
    reducerPath: 'rootApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:5000/api', 
        credentials: 'include',
    }),
    tagTypes: [
        'Category',
        'Characteristic'
    ],
    endpoints: (build) => ({
        
    }),
})
