import React from 'react'
import { withRouter } from 'react-router'
import Color from '../HOC/Color'

class Home extends React.Component {
  //   componentDidMount = () => {
  //     setTimeout(() => {
  //       this.props.history.push('/todo')
  //     }, 5000)
  //   }

  render() {
    return (
      <div>
        <p> Simple TODO Apps with React.js (Draco &amp; Vuong Hoai An)</p>
      </div>
    )
  }
}

//export default Home
export default Color(Home)
