import React from 'react';
import { PostsPlaceholderService } from 'Modules/PostsPlaceholder/services/PostsPlaceholderService';
import { PageSpinner } from 'Common/UIKit';
import { PostPlaceholderItem } from 'Modules/PostsPlaceholder/components/PostPlaceholderItem';
import { PostPlaceholderAdd } from 'Modules/PostsPlaceholder/components/PostPlaceholderAdd';

/** RTK Query */
export const PostsPlaceholderView = () => {
    const { useFetchAllPostsQuery } = PostsPlaceholderService;
    const postsQuery = useFetchAllPostsQuery(10);

    if (postsQuery.isLoading) {
        return <PageSpinner />;
    }

    return (
        <>
            <PostPlaceholderAdd />
            <ul className="list-group">
                {postsQuery.data?.map((post) => {
                    return <PostPlaceholderItem key={post.id} post={post} />;
                })}
            </ul>
        </>
    );
};
