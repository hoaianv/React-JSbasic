import React from 'react'
import './ListTodo.scss'
import AddTodo from './AddTodo'
import { toast } from 'react-toastify'

class ListTodo extends React.Component {
  state = {
    ListTodos: [
      { id: 1, title: 'Doing Homework' },
      { id: 2, title: 'Making Videos' },
      { id: 3, title: 'Fixing Bugs' },
    ],
  }

  AddNewTodo = (todo) => {
    // let currentTodo = this.state.ListTodos
    // currentTodo.push(todo)
    this.setState({
      ListTodos: [...this.state.ListTodos, todo],
      //   ListTodos: currentTodo,
    })
    toast.success('Wow so easy!')
  }

  render() {
    let { ListTodos } = this.state
    return (
      <div className="List-Todo-Container">
        <AddTodo AddNewTodo={this.AddNewTodo} />
        <div className="List-Todo-content">
          {ListTodos &&
            ListTodos.length > 0 &&
            ListTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span>
                    {index + 1} --- {item.title}
                  </span>
                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}
export default ListTodo
