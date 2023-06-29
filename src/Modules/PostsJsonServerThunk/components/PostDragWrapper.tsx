import React, { DragEventHandler, FC, PropsWithChildren } from 'react';
import { IPostQuery } from 'Core/API';
import { updatePostOrderMutate } from 'Modules/PostsJsonServerThunk/store/Posts/reducers';
import { useAppDispatch } from 'Store';

interface IPostDragWrapperProps {
    post: IPostQuery;
    currentDnDPost: IPostQuery | null;
    setCurrentDnDPost: (post: IPostQuery) => void;
}

export const PostDragWrapper: FC<PropsWithChildren<IPostDragWrapperProps>> = (props) => {
    const { post, currentDnDPost, setCurrentDnDPost, children } = props;
    const dispatch = useAppDispatch();

    // когда взяли карточку
    const onDragStart: DragEventHandler<HTMLLIElement> = (event) => {
        setCurrentDnDPost(post);
        event.currentTarget.style.backgroundColor = '#dc354510';
    };

    // отпустили перемещение
    const onDragEnd: DragEventHandler<HTMLLIElement> = (event) => {
        event.currentTarget.style.backgroundColor = 'initial';
    };

    // находимся над другим объектом
    const onDragOver: DragEventHandler<HTMLLIElement> = (event) => {
        event.preventDefault();
        if (currentDnDPost?.id === post.id) {
            return;
        }
        event.currentTarget.style.backgroundColor = '#19875410';
    };

    // отпустили карточку и расчитываем на действие
    const onDrop: DragEventHandler<HTMLLIElement> = (event) => {
        event.preventDefault();

        if (currentDnDPost) {
            dispatch(updatePostOrderMutate({ overPost: post, currentPost: currentDnDPost }));
        }

        event.currentTarget.style.backgroundColor = 'initial';
    };

    return (
        <li
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{ minHeight: '56px' }}
            draggable={true}
            onDragStart={onDragStart}
            onDragLeave={onDragEnd}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
            {children}
        </li>
    );
};
