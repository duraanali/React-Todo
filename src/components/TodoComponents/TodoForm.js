import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Todo.css'
class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value

        });

    };

    submitItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
    };

    render = () => {
        return (

            <form onSubmit={this.submitItem}>
                <div className="input-group mb-3">
                    <input
                        className="form-control title"
                        type="text"
                        value={this.item}
                        placeholder="Write Here..."
                        name="item"
                        onChange={this.handleChanges}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-success">Add</button>
                    </div>
                </div>
            </form>

        );
    };
}

export default TodoForm;