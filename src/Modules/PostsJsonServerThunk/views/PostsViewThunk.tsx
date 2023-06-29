import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SpinnerOverlay } from 'Common/UIKit';
import { IPostQuery } from 'Core/API';
import { getPostsJsonServerThunk } from 'Modules/PostsJsonServerThunk/store/Posts/actions';
import { useAppDispatch } from 'Store';
import { EProcessStatus } from 'Store/enums';
import { PostDragWrapper } from '../components/PostDragWrapper';
import { PostsAdd } from '../components/PostsAdd';
import { PostsItem } from '../components/PostsItem';
import { postsJsonServerSelector } from '../store/Posts/selectors';

/** toolkit */
export const PostsViewThunk = () => {
    const { status, error, data: posts } = useSelector(postsJsonServerSelector);
    const dispatch = useAppDispatch();

    const [currentDnDPost, setCurrentDnDPost] = useState<IPostQuery | null>(null);

    const setCurrentDnDPostCallback = useCallback((post: IPostQuery) => {
        setCurrentDnDPost(post);
    }, []);

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
                    {posts?.map((post) => (
                        <PostDragWrapper
                            key={post.id}
                            post={post}
                            setCurrentDnDPost={setCurrentDnDPostCallback}
                            currentDnDPost={currentDnDPost}
                        >
                            <PostsItem key={post.id} post={post} />
                        </PostDragWrapper>
                    ))}
                </ul>
            </SpinnerOverlay>
        </>
    );
};
