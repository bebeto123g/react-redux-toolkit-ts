import React from 'react';
import { PageSpinner } from 'Common/UIKit';
import { PostPlaceholderAdd } from 'Modules/PostsPlaceholder/components/PostPlaceholderAdd';
import { PostPlaceholderItem } from 'Modules/PostsPlaceholder/components/PostPlaceholderItem';
import { PostsPlaceholderService } from 'Modules/PostsPlaceholder/services/PostsPlaceholderService';

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
