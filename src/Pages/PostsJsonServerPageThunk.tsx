import React from 'react';
import { PostsViewThunk } from 'Modules/PostsJsonServerThunk';

export const PostsJsonServerPageThunk = () => {
    return (
        <div className="container">
            <h1 className="h1 mb-5">Posts JsonServer Page Thunk</h1>
            <PostsViewThunk />
        </div>
    );
};
