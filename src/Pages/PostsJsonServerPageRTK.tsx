import React from 'react';
import { PostsJsonServerViewRtk } from 'Modules/PostsJsonServerRtkQuery';

export const PostsJsonServerPageRtk = () => {
    return (
        <div className="container">
            <h1 className="h1 mb-5">Posts JsonServer Page Rtk Query</h1>
            <PostsJsonServerViewRtk />
        </div>
    );
};
