import React from 'react';
import "./Todo.css";

const Todo = props => {
    return (
        <div>
            <table className="list-group">
                <tbody>
                    <tr className="list-group-item">


                        <td
                            className={`col-lg-4 title item${props.toDo.completed ? 'completed' : ''}`}
                        >{props.toDo.task}</td>


                        <td className="col-lg-4"><button onClick={() => props.toggleItem(props.toDo.id)} className="btn btn-success">Done</button></td>
                        <td className="col-lg-4"><button className="btn btn-danger" onClick={() => props.deleteToDo(props.toDo.id)}>Delete</button></td>
                        <td className="col-lg-8"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Todo;
