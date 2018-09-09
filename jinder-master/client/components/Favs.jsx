import React from 'react'
import getFavJobs from '../../server/db/example'

export default class Favs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            location: '',
            type: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.saveFavJobs = this.saveFavJobs.bind(this)

    }

    handleSubmit (e) {
        e.preventDefault();
        this.setState({
          [e.target.name]: e.target.value
        })

      }

    saveFavJobs(e) {
  
    }
    render () {
      
      
      

    return (
      <div className="Favs">
        <h4>Your Favourites are :</h4>
        
        <ul>
            <li><a href="https://jobs.github.com/positions/62dcad98-a4af-11e8-92e9-19e7c6a4d993">Senior Full Stack Engineer</a></li>
            <li><a href="https://jobs.github.com/positions/aeabcf78-9a74-11e8-8fc6-3711b96e5beb">Senior Software Engineer, Web</a></li>
        </ul>
      </div>
    )
  }
}