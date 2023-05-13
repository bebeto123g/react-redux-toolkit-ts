import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { postsJsonServerSelector } from 'Modules/PostsJsonServer/store/Posts/selectors';
import { useAppDispatch } from 'Store';
import { getPostsPlaceholderThunk } from 'Modules/PostsJsonServer/store/Posts/actions';
import { PageSpinner } from 'Common/UIKit';
import { EProcessStatus } from 'Store/enums';

/** toolkit */
export const PostsJsonServerViewToolkit = () => {
    const { status, error, data: posts } = useSelector(postsJsonServerSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!posts?.length) {
            dispatch(getPostsPlaceholderThunk());
        }
    }, [dispatch, posts?.length]);

    if (status === EProcessStatus.PENDING) {
        return <PageSpinner />;
    }

    if (status === EProcessStatus.ERROR && error) {
        return <p className="text-danger">{error}</p>;
    }

    return (
        <ul>
            {posts?.map((post) => {
                return (
                    <li key={post.id} style={{ marginBottom: '8px' }}>
                        <span>{post.title}</span>
                        <br />
                        <span>
                            {Intl.DateTimeFormat('ru-RU', {
                                dateStyle: 'medium',
                                timeStyle: 'medium',
                            }).format(new Date(post.createDate))}
                        </span>
                    </li>
                );
            })}
        </ul>
    );
};
