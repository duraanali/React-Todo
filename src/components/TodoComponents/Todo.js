import React from 'react';
import '../TodoComponents/Todo.css'

const Todo = props => {
    return (
        <div>
            <table className="list-group">
                <tbody>
                    <tr className="list-group-item between">

                        <td className="col-lg-4 title">{props.toDo.task}</td>

                        <td className="col-lg-4"><button className="btn btn-success">Done</button></td>
                        <td className="col-lg-4"><button className="btn btn-danger">Delete</button></td>
                        <td className="col-lg-8"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Todo;
