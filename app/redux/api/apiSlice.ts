import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://vahicle-management-backend.vercel.app/api/v1/'
    }),
    endpoints: (builder) => ({
        signIn: builder.mutation({
            query: ({ data }) => ({
                url: `/auth/signIn`,
                method: 'POST',
                body: data
            })
        })
    })
});

export const { useSignInMutation } = api;
