import React, { FormEventHandler } from 'react';
import { Spinner } from 'Common/UIKit';
import { useAddJsonServerRtkQueryTodosMutation } from '../services/TodosJsonServerRtkQueryApi';

export const AddTodo = () => {
    const [addTodoMutation, { isLoading }] = useAddJsonServerRtkQueryTodosMutation();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        // @ts-ignore
        const input = event.currentTarget.elements['todo-title'] as HTMLInputElement;
        const title = input.value.trim();
        if (title) {
            await addTodoMutation({ title });
            input.value = '';
        }
    };

    return (
        <>
            <h3>Add TODO</h3>
            <form className="row mb-4" onSubmit={handleSubmit}>
                <div className="col-11">
                    <label htmlFor="inputPassword2" className="visually-hidden">
                        Password
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="input-add=todo"
                        placeholder="Add TODO"
                        name="todo-title"
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
