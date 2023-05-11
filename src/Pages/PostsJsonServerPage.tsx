import React from 'react';
import { PostsJsonServerViewToolkit } from 'Modules/PostsJsonServer';

export const PostsJsonServerPage = () => {
    return (
        <div className="container">
            <h1 className="h1">Posts JsonServer Page</h1>
            <PostsJsonServerViewToolkit />
        </div>
    );
};
