import React from 'react';
import { PostsPlaceholderService } from 'Modules/PostsPlaceholder/services/PostsPlaceholderService';

export const PostPlaceholderAdd = () => {
    const { useCreatePostMutation } = PostsPlaceholderService;

    return (
        <>
            <h3>Добавить пост</h3>
            <form className="row mb-4">
                <div className="col-11">
                    <label htmlFor="inputPassword2" className="visually-hidden">
                        Password
                    </label>
                    <input type="text" className="form-control" id="input-add=post" placeholder="Add post" />
                </div>
                <div className="col-1 d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </div>
            </form>
        </>
    );
};
