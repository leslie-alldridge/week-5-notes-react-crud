import React from 'react'
import Job from './Job'

export default class JobDetail extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showJobId: null,
      data: this.props.data
    }
    this.handleClick = this.handleClick.bind(this)
    console.log(this.state.data);
    
  }

  handleClick(showJobId){
    this.setState(prevState => ({
      showJobId: prevState.showJobId == showJobId ? null : showJobId
    }));
    
  }

  render(){

    return (
      <div className="jobList">
       <ul>
           {this.props.data.body.map(jobInfo => {
            return (
              <div className="listings">
                <li><img className="logo" src={jobInfo.company_logo}></img><a onClick={() => this.handleClick(jobInfo.id)}>{jobInfo.title}</a>
                {this.state.showJobId == jobInfo.id && <Job key={jobInfo.id} job={jobInfo}/>}</li>
                <hr/>
              </div>
            )
          })}
       </ul>
      </div>
    )
  }
  }