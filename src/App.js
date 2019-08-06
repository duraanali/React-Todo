import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'
import 'bootstrap/dist/css/bootstrap.css';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
  {
    task: 'Finish Reading The Book',
    id: 1528817077286,
    completed: true
  },
  {
    task: 'Get Groceries',
    id: 152888,
    completed: true
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
      completed: true
    };
    console.log(itemName)
    this.setState({
      toListItems: [...this.state.toListItems, newItem]
    });
  };

  deleteToDo = () => {
    this.setState({
      toListItems: this.state.toListItems.filter(toDo => toDo.completed)
    });
  };

  render() {

    return (
      <div className="app">
        <h2 className="text-center m-3">To-Do List App</h2>

        <div className="container">
          <TodoForm addItem={this.addItem} />
          <TodoList toDoInfo={this.state.toListItems} toggleItem={this.toggleItem} deleteToDo={this.deleteToDo} />
        </div>
      </div>
    );
  }
}

export default App;
