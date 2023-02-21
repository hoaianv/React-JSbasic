import React from 'react'
import { withRouter } from 'react-router'
import Color from '../HOC/Color'
import { connect } from 'react-redux'
class Home extends React.Component {
  //   componentDidMount = () => {
  //     setTimeout(() => {
  //       this.props.history.push('/todo')
  //     }, 5000)
  //   }
  handleDeleteUser = (item) => {
    // console.log('check itemdelete', item)
    this.props.DeleteUserRedux(item)
  }

  handleCreateUser = () => {
    this.props.CreateUserRedux()
  }

  render() {
    let listUsers = this.props.DataRedux
    return (
      <div>
        <p> Simple TODO Apps with React.js (Draco &amp; Vuong Hoai An)</p>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => {
            return (
              <div key={index}>
                {index + 1} -- {item.name}{' '}
                <span onClick={() => this.handleDeleteUser(item)}>x</span>
              </div>
            )
          })}
        <button onClick={() => this.handleCreateUser()}>Create User</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    DataRedux: state.users,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    DeleteUserRedux: (userDelete) =>
      dispatch({ type: 'DELETE_USER', pay: userDelete }),
    CreateUserRedux: () => dispatch({ type: 'CREATE_USER' }),
  }
}

//export default Home
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home))
