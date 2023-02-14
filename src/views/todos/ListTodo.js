import React from 'react'

class ListTodo extends React.Component {
  render() {
    return (
      <div className="List-Todo-Container">
        <div className="add-Todo">
          <input type="Text" />
          <button type="button">Add</button>
        </div>
        <div className="List-Todo-content">
          <div className="todo-child">
            Test todo <button type="Edit">Edit</button>
            <button type="Delete">Delete</button>
          </div>
        </div>
      </div>
    )
  }
}
export default ListTodo
