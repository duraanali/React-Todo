import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
    return (
        <div>
            {props.toDoInfo.map(toDo => (
                <Todo key={toDo.id} toDo={toDo} toggleItem={props.toggleItem} />
            ))}

        </div>
    );
};

export default TodoList;


