import React, { useMemo } from 'react';
import { SpinnerOverlay } from 'Common/UIKit';
import { PostsAdd } from 'Modules/PostsJsonServerRtkQuery/components/PostsAdd';
import {
    PostsItem,
} from 'Modules/PostsJsonServerRtkQuery/components/PostsItem';
import { useGetPostsJsonServerQuery } from '../services/PostsJsonServerService';

export const PostsJsonServerViewRtk = () => {
    const { data: posts = [], isFetching } = useGetPostsJsonServerQuery(100);

    const sortedPosts = useMemo(() => {
        return posts.slice().reverse();
    }, [posts]);

    return (
        <>
            <PostsAdd />
            <SpinnerOverlay isLoading={isFetching}>
                <ul className="list-group">
                    {sortedPosts.map((post) => {
                        return <PostsItem key={post.id} post={post} />;
                    })}
                </ul>
            </SpinnerOverlay>
        </>
    );
};
