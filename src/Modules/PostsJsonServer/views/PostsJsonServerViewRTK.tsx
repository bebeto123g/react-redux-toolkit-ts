import React, { useMemo } from 'react';
import { PostsJsonServerAdd } from '../components/PostsJsonServerAdd';
import { PostsJsonServerItem } from '../components/PostsJsonServerItem';
import { useGetPostsJsonServerQuery } from '../services/PostsJsonServerService';
import { SpinnerOverlay } from 'Common/UIKit';

export const PostsJsonServerViewRtk = () => {
    const { data: posts = [], isFetching } = useGetPostsJsonServerQuery(100);

    const sortedPosts = useMemo(() => {
        return posts.slice().reverse();
    }, [posts]);

    return (
        <>
            <PostsJsonServerAdd />
            <SpinnerOverlay isLoading={isFetching}>
                <ul className="list-group">
                    {sortedPosts.map((post) => {
                        return <PostsJsonServerItem key={post.id} post={post} />;
                    })}
                </ul>
            </SpinnerOverlay>
        </>
    );
};
