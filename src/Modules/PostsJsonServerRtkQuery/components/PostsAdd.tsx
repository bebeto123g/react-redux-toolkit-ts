import React, { FormEventHandler } from 'react';
import { Spinner } from 'Common/UIKit';
import { useCreatePostJsonServerMutation } from '../services/PostsJsonServerServiceApi';

export const PostsAdd = () => {
    const [createPostJsonServer, { isLoading }] = useCreatePostJsonServerMutation();

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        // @ts-ignore
        const input = event.currentTarget.elements['post-title'] as HTMLInputElement;
        const title = input.value.trim();
        if (title) {
            createPostJsonServer({
                title: input.value,
                text: '',
            });
            input.value = '';
        }
    };

    return (
        <>
            <h3>Add Post</h3>
            <form className="row mb-4" onSubmit={handleSubmit}>
                <div className="col-11">
                    <label htmlFor="inputPassword2" className="visually-hidden">
                        Password
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="input-add=post"
                        placeholder="Add post"
                        name="post-title"
                    />
                </div>
                <div className="col-1 d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary" style={{ minWidth: '75px' }}>
                        {isLoading ? <Spinner small /> : 'Add'}
                    </button>
                </div>
            </form>
        </>
    );
};
