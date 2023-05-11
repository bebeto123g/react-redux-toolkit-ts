import React, { FocusEventHandler, useState } from 'react';
import { IPost } from 'Core/API';
import { PostsPlaceholderService } from 'Modules/PostsPlaceholder/services/PostsPlaceholderService';

interface IPostPlaceholderItemProps {
    post: IPost;
}

export const PostPlaceholderItem = (props: IPostPlaceholderItemProps) => {
    const { post } = props;
    const { useDeletePostMutation, useUpdatePostMutation } = PostsPlaceholderService;
    const [isEdit, setIsEdit] = useState(false);

    const [deletePost] = useDeletePostMutation();
    const [updatePost] = useUpdatePostMutation();

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation();
        deletePost(post);
    };

    const handleUpdate: FocusEventHandler<HTMLInputElement> = (event) => {
        setIsEdit(false);
        console.log({ ...post, title: event.target.value });
        updatePost({ ...post, title: event.target.value });
    };

    return (
        <li className="list-group-item d-flex justify-content-between">
            {isEdit ? (
                <input
                    type="text"
                    onBlur={handleUpdate}
                    defaultValue={post.title}
                    className="form-control"
                />
            ) : (
                <span onDoubleClick={() => setIsEdit(true)}>
                    {post.id}. {post.title}
                </span>
            )}
            <button onClick={handleRemove} className="btn btn-outline-danger ms-2">
                Delete
            </button>
        </li>
    );
};
