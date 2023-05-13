import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { postsJsonServerSelector } from '../store/Posts/selectors';
import { useAppDispatch } from 'Store';
import { SpinnerOverlay } from 'Common/UIKit';
import { EProcessStatus } from 'Store/enums';
import { PostsAdd } from '../components/PostsAdd';
import { PostsItem } from '../components/PostsItem';
import { getPostsJsonServerThunk } from '../store/Posts/reducers';

/** toolkit */
export const PostsViewThunk = () => {
    const { status, error, data: posts } = useSelector(postsJsonServerSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!posts?.length) {
            dispatch(getPostsJsonServerThunk());
        }
    }, [dispatch, posts?.length]);

    if (status === EProcessStatus.ERROR && error) {
        return <p className="text-danger">{error}</p>;
    }

    return (
        <>
            <PostsAdd />
            <SpinnerOverlay isLoading={status === EProcessStatus.PENDING}>
                <ul className="list-group">
                    {posts?.map((post) => {
                        return <PostsItem key={post.id} post={post} />;
                    })}
                </ul>
            </SpinnerOverlay>
        </>
    );
};
