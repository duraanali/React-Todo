import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'
import 'bootstrap/dist/css/bootstrap.css';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 152888,
    completed: false
  }
];



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toListItems: todoData
    };

  }

  toggleItem = id => {
    console.log(id);

    this.setState({
      toListItems: this.state.toListItems.map(item => {
        if (item.id === id) {
          return {
            ...item,

            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    console.log(itemName)
    this.setState({
      toListItems: [...this.state.toListItems, newItem]
    });
  };

  render() {

    return (
      <div className="app">
        <h2 className="text-center m-3">To-Do List App</h2>

        <div className="container">
          <TodoForm addItem={this.addItem} />
          <TodoList toDoInfo={this.state.toListItems} />
        </div>
      </div>
    );
  }
}

export default App;
