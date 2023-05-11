import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPost, JSON_PLACEHOLDER_BASE_URL } from 'Core/API';

export const PostsPlaceholderService = createApi({
    reducerPath: 'postsPlaceholderRTKQuery',
    baseQuery: fetchBaseQuery({
        baseUrl: JSON_PLACEHOLDER_BASE_URL,
    }),
    tagTypes: ['PlaceholderPosts'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit = 5) => ({
                url: `/posts`,
                params: {
                    _limit: limit,
                },
            }),
            providesTags: (result) => ['PlaceholderPosts'],
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts`,
                method: 'POST',
                body: post,
            }),
            invalidatesTags: ['PlaceholderPosts'],
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post,
            }),
            invalidatesTags: ['PlaceholderPosts'],
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['PlaceholderPosts'],
        }),
    }),
});
