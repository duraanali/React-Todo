import React from 'react';

import Todo from './Todo';

const TodoList = props => {

    return (
        <div>
            {props.toDoInfo.map(toDo => (
                <Todo key={toDo.id} toDo={toDo} toggleItem={props.toggleItem} deleteToDo={props.deleteToDo} />
            ))}

        </div>
    );
};

export default TodoList;


