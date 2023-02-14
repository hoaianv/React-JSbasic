import React from 'react'

class ChildComponent extends React.Component {
  state = { showJobs: false }
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    })
  }
  handleClickDelete = (job) => {
    console.log('>>>> check click handle', { job })
    this.props.DeleteAJob(job)
  }

  render() {
    let { arrJobs } = this.props
    let { showJobs } = this.state
    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} --- {item.salary}{' '}
                    <>
                      <span onClick={() => this.handleClickDelete(item)}>
                        x
                      </span>
                    </>
                  </div>
                )
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hidden</button>
            </div>
          </>
        )}
      </>
    )
  }
}

// const ChildComponent = (props) => {
//   let { arrJobs } = props

//   return (
//     <>
//       <div className="job-lists">
//         {arrJobs.map((item, index) => {
//           return (
//             <div key={item.id}>
//               {item.title} - {item.salary}
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }

export default ChildComponent
