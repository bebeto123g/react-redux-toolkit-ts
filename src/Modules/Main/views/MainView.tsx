import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { placeholderPostsSelector } from 'Modules/Main/store/Posts/selectors';
import { PageSpinner } from 'Common/UIKit';
import { useAppDispatch } from 'Store';
import { getPostsPlaceholder } from 'Modules/Main/store/Posts/actions';

export const MainView = () => {
    const { isLoading, error, data: posts } = useSelector(placeholderPostsSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPostsPlaceholder());
    }, []);

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
