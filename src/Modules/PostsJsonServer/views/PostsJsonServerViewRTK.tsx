import React, { useMemo } from 'react';
import { PageSpinner } from 'Common/UIKit';
import { PostsJsonServerAdd } from '../components/PostsJsonServerAdd';
import { PostsJsonServerItem } from '../components/PostsJsonServerItem';
import { PostsJsonServerService } from '../services/PostsJsonServerService';

export const PostsJsonServerViewRtk = () => {
    const { useGetPostsJsonServerQuery } = PostsJsonServerService;
    const { data: posts = [], isLoading } = useGetPostsJsonServerQuery(100);

    const sortedPosts = useMemo(() => {
        const sortedPosts = posts.slice();
        // Sort posts in descending chronological order
        sortedPosts.reverse();
        return sortedPosts;
    }, [posts]);

    if (isLoading) {
        return <PageSpinner />;
    }

    return (
        <>
            PostsJsonServerViewRtk view
            <PostsJsonServerAdd />
            <ul className="list-group">
                {sortedPosts.map((post) => {
                    return <PostsJsonServerItem key={post.id} post={post} />;
                })}
            </ul>
        </>
    );
};
