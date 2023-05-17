import React, { KeyboardEventHandler, MouseEventHandler, memo, useRef, useState } from 'react';
import { Spinner } from 'Common/UIKit';
import { IPostQuery } from 'Core/API';
import {
    useDeletePostJsonServerMutation,
    useUpdatePostJsonServerMutation,
} from 'Modules/PostsJsonServerRtkQuery/services/PostsJsonServerServiceApi';

interface IPostPlaceholderItemProps {
    post: IPostQuery;
}

export const PostsItem = memo((props: IPostPlaceholderItemProps) => {
    const { post } = props;

    const [isEdit, setIsEdit] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const [deletePost, { isLoading: isDeleteLoading }] = useDeletePostJsonServerMutation();
    const [updatePost, { isLoading: isUpdateLoading }] = useUpdatePostJsonServerMutation();

    const handleRemove: MouseEventHandler = (event) => {
        event.stopPropagation();
        deletePost(post);
    };

    const handleUpdate = () => {
        const value = inputRef.current?.value.trim() || '';
        if (post.title.trim() !== value) {
            updatePost({ ...post, title: value });
        }

        setIsEdit(false);
    };

    const handleKeyboard: KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === 'Enter') {
            handleUpdate();
        }
    };

    const handleEdit = () => {
        setIsEdit(true);
        setTimeout(() => {
            inputRef.current?.focus();
        });
    };

    const isDisabled = isDeleteLoading || isUpdateLoading;

    return (
        <li
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{
                minHeight: '56px',
                pointerEvents: isDisabled ? 'none' : 'auto',
                opacity: isDisabled ? 0.8 : 1,
                backgroundColor: isDisabled ? '#0a09090a' : 'initial',
            }}
        >
            {isEdit && !isDisabled ? (
                <input
                    type="text"
                    onBlur={handleUpdate}
                    defaultValue={post.title}
                    className="form-control"
                    onKeyDown={handleKeyboard}
                    ref={inputRef}
                />
            ) : (
                <div onDoubleClick={handleEdit} className="flex-grow-1 d-flex align-items-center">
                    {post.id}. {post.title}
                </div>
            )}
            <button
                onClick={handleEdit}
                className="btn btn-outline-success ms-2 p-2"
                style={{ lineHeight: '9px', transform: 'scale(.8)' }}
            >
                {isUpdateLoading ? <Spinner small /> : <i className="bi bi-pencil-fill" />}
            </button>
            <button
                onClick={handleRemove}
                className="btn btn-outline-danger ms-2 p-2"
                style={{ lineHeight: '9px', transform: 'scale(.8)' }}
            >
                {isDeleteLoading ? <Spinner small /> : <i className="bi bi-trash" />}
            </button>
        </li>
    );
});

PostsItem.displayName = 'PostsItem';
