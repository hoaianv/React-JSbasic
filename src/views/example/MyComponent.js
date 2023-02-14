import React from 'react'
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent'
class MyComponent extends React.Component {
  //key:value
  state = {
    arrJobs: [
      { id: 'abcJob1', title: 'Developers', salary: '500 $' },
      { id: 'abcJob2', title: 'Testers', salary: '400 $' },
      { id: 'abcJob3', title: 'Project managers', salary: '1000 $' },
      { id: 'abcJob4', title: 'DB', salary: '400 $' },
    ],
  }
  AddnewJob = (job) => {
    console.log('>>>> check new job:', { job })
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    })
  }
  DeleteAJob = (job) => {
    let currentJob = this.state.arrJobs
    currentJob = currentJob.filter((item) => item.id !== job.id)
    this.setState({
      arrJobs: currentJob,
    })
  }

  render() {
    console.log('>>>> call render: ', this.state)
    return (
      <>
        <div>
          <AddComponent AddnewJob={this.AddnewJob} />
        </div>
        <div>
          <ChildComponent
            arrJobs={this.state.arrJobs}
            DeleteAJob={this.DeleteAJob}
          />
        </div>
      </>
    )
  }
}
export default MyComponent
