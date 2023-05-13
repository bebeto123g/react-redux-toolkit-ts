import React, { ChangeEventHandler, KeyboardEventHandler, MouseEventHandler, useRef, useState } from 'react';
import { Spinner } from 'Common/UIKit';
import { ITodoQuery } from 'Core/API';
import { EBootstrapColors } from 'Core/enums';
import {
    useDeleteJsonServerRtkQueryTodosMutation,
    useUpdateCompletedJsonServerRtkQueryTodosMutation,
} from '../services/TodosJsonServerRtkQueryApi';

interface IItemTodoProps {
    todo: ITodoQuery;
}

export const ItemTodo = (props: IItemTodoProps) => {
    const { todo } = props;

    const [deleteTodoMutation, { isLoading: isDeleteLoading }] = useDeleteJsonServerRtkQueryTodosMutation();
    const [updateTodoMutation, { isLoading: isUpdateLoading }] =
        useUpdateCompletedJsonServerRtkQueryTodosMutation();

    const [toggleTodoMutation, { isLoading: isToggleLoading }] =
        useUpdateCompletedJsonServerRtkQueryTodosMutation();

    const [isEdit, setIsEdit] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleRemove: MouseEventHandler = (event) => {
        event.stopPropagation();
        deleteTodoMutation({ id: todo.id });
    };

    const handleUpdate = () => {
        const value = inputRef.current?.value.trim() || '';
        if (todo.title.trim() !== value) {
            updateTodoMutation({ id: todo.id, title: value, completed: todo.completed });
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

    const toggleCompleted: ChangeEventHandler<HTMLInputElement> = (event) => {
        toggleTodoMutation({
            id: todo.id,
            title: todo.title,
            completed: event.currentTarget.checked,
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
            {isToggleLoading ? (
                <Spinner small className="mt-0 me-3" color={EBootstrapColors.PRIMARY} />
            ) : (
                <input
                    className="form-check-input mt-0 me-3"
                    type="checkbox"
                    onChange={toggleCompleted}
                    checked={todo.completed}
                    aria-label="Checkbox for following text input "
                />
            )}

            {isEdit && !isDisabled ? (
                <input
                    type="text"
                    onBlur={handleUpdate}
                    defaultValue={todo.title}
                    className="form-control"
                    onKeyDown={handleKeyboard}
                    ref={inputRef}
                />
            ) : (
                <div onDoubleClick={handleEdit} className="flex-grow-1 d-flex align-items-center">
                    {todo.id}. {todo.title}
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
};
