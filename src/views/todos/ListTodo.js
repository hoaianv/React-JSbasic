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
    editTodo: {},
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
  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.ListTodos
    currentTodos = currentTodos.filter((item) => item.id !== todo.id)
    this.setState({
      ListTodos: currentTodos,
    })
    console.log('check todo >>>>', currentTodos)
    toast.success('Delele succeed!')
  }
  handleEditTodo = (todo) => {
    this.setState({
      editTodo: todo,
    })
  }
  handleOnchangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo }
    editTodoCopy.title = event.target.value
    this.setState({
      editTodo: editTodoCopy,
    })
  }
  render() {
    let { ListTodos, editTodo } = this.state
    let isEmptyObj = Object.keys(editTodo).length === 0
    console.log('>>> check ', isEmptyObj)
    return (
      <div className="List-Todo-Container">
        <AddTodo AddNewTodo={this.AddNewTodo} />
        <div className="List-Todo-content">
          {ListTodos &&
            ListTodos.length > 0 &&
            ListTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === true ? (
                    <span>
                      {index + 1} --- {item.title}
                    </span>
                  ) : (
                    <>
                      {item.id === editTodo.id ? (
                        <span>
                          {index + 1} ---{' '}
                          <input
                            value={editTodo.title}
                            onChange={(event) =>
                              this.handleOnchangeEditTodo(event)
                            }
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} --- {item.title}
                        </span>
                      )}
                    </>
                  )}
                  <button
                    className="edit"
                    onClick={() => this.handleEditTodo(item)}
                  >
                    {isEmptyObj === false && item.id === editTodo.id
                      ? 'save'
                      : 'edit'}
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.handleDeleteTodo(item)}
                  >
                    Delete
                  </button>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}
export default ListTodo
