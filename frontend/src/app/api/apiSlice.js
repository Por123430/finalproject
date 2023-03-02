import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl : 'http://localhost:3500',
    credentials: 'include',
    prerareHeaders: (headers, { getState }) => {
        const token = getState().auth.token

        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWitchReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
}
export const apiSlice = createApi({
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500'}),
    baseQuery,
    tagTypes: ['Note', 'User', 'Moniters'],
    endpoints: builder => ({})
})