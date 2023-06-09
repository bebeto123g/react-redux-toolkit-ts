import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPostQuery, JSON_SERVER_BASE_URL_POSTS } from 'Core/API';

export const PostsJsonServerServiceApi = createApi({
    reducerPath: 'postJsonServerRTKQuery',
    baseQuery: fetchBaseQuery({
        baseUrl: JSON_SERVER_BASE_URL_POSTS,
    }),
    tagTypes: ['JsonServerPosts'],
    endpoints: (build) => ({
        getPostsJsonServer: build.query<IPostQuery[], number>({
            query: (limit?: number) => ({
                url: ``,
                params: {
                    _limit: limit || 10,
                },
            }),
            providesTags: (result) => ['JsonServerPosts'],
        }),
        createPostJsonServer: build.mutation<IPostQuery, Omit<IPostQuery, 'id' | 'createDate'>>({
            query: (post) => ({
                url: ``,
                method: 'POST',
                body: {
                    title: post.title,
                    text: post.text,
                    createDate: new Date().toISOString(),
                },
            }),
            invalidatesTags: ['JsonServerPosts'],
        }),
        updatePostJsonServer: build.mutation<IPostQuery, IPostQuery>({
            query: (post) => ({
                url: `/${post.id}`,
                method: 'PUT',
                body: post,
            }),
            invalidatesTags: ['JsonServerPosts'],
        }),
        deletePostJsonServer: build.mutation<IPostQuery, IPostQuery>({
            query: (post) => ({
                url: `/${post.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['JsonServerPosts'],
        }),
    }),
});

export const {
    useGetPostsJsonServerQuery,
    useDeletePostJsonServerMutation,
    useUpdatePostJsonServerMutation,
    useCreatePostJsonServerMutation,
} = PostsJsonServerServiceApi;
