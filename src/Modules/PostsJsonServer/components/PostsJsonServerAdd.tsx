import React, { FormEventHandler } from 'react';
import { PostsJsonServerService } from '../services/PostsJsonServerService';

export const PostsJsonServerAdd = () => {
    const { useCreatePostJsonServerMutation } = PostsJsonServerService;
    const [createPostJsonServer] = useCreatePostJsonServerMutation();

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        // @ts-ignore
        const input = event.currentTarget.elements['post-title'] as HTMLInputElement;
        event.preventDefault();
        createPostJsonServer({
            title: input.value,
            text: '',
        });
        input.value = '';
    };

    return (
        <>
            <h3>Добавить пост</h3>
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
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </div>
            </form>
        </>
    );
};
