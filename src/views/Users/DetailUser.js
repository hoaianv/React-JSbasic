import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
class DetailUser extends React.Component {
  state = {
    user: {},
  }
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id

      let res = await axios.get(`https://reqres.in/api/users/${id}`)
      console.log('>>> check  res   ', res)
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      })
    }
  }
  handleBackButton = () => {
    this.props.history.push('/user')
  }

  render() {
    let { user } = this.state
    let isEmptyObj = Object.keys(user).length === 0

    return (
      <>
        {isEmptyObj === false ? (
          <>
            <div>
              User's name: {user.first_name} -- {user.last_name}{' '}
            </div>
            <div>User's email: {user.email}</div>
            <div>
              <img src={user.avatar} />
            </div>
            <div>
              <button type="button" onClick={() => this.handleBackButton()}>
                {' '}
                Go back{' '}
              </button>
            </div>
          </>
        ) : (
          <>
            <h1>Hong co du lieu</h1>
          </>
        )}
      </>
    )
  }
}

export default withRouter(DetailUser)
