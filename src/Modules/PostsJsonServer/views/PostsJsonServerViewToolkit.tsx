import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { postsJsonServerSelector } from 'Modules/PostsJsonServer/store/Posts/selectors';
import { useAppDispatch } from 'Store';
import { getPostsPlaceholderThunk } from 'Modules/PostsJsonServer/store/Posts/actions';
import { PageSpinner } from 'Common/UIKit';

/** toolkit */
export const PostsJsonServerViewToolkit = () => {
    const { isLoading, error, data: posts } = useSelector(postsJsonServerSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!posts?.length) {
            dispatch(getPostsPlaceholderThunk());
        }
    }, [dispatch, posts?.length]);

    if (isLoading) {
        return <PageSpinner />;
    }

    if (error) {
        return <p className="text-danger">{error}</p>;
    }

    return (
        <ul>
            {posts?.map((post) => {
                return <li key={post.id}>{post.title}</li>;
            })}
        </ul>
    );
};
