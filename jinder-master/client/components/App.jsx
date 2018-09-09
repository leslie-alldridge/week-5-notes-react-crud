import React from 'react'
import {
	HashRouter as Router,
	Route
} from 'react-router-dom'
import JobDetail from './JobDetail'
import request from 'superagent'
import Favs from './Favs'


class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			apiInfo: '',
			searchTerm: '',
			location: '',
			return: false,
			seeFaves: false
		}
		this.getData = this.getData.bind(this)
		this.seeFaves = this.seeFaves.bind(this)

	}

	getData(location, search) {
		request.get(`https://jobs.github.com/positions.json?description=${search}&location=${location}&full_time=true`)
			.then(data => {
				this.setState({
					apiInfo: data,
					return: true
				})
				console.log(this.state);
			})
	}


	seeFaves() {
		this.setState(prevState => ({
			seeFaves: !prevState.seeFaves
		}));
	}

	updateInputValue(evt) {
		this.setState({
			searchTerm: evt.target.value
		});

	}
	submit(e) {
		e.preventDefault()
		this.getData(this.state.searchTerm)
	}
	updateLocation(evt) {
		this.setState({
			location: evt.target.value
		});

		this.getData(evt.target.value, this.state.searchTerm)
	}


	render() {
		return (
			<div>
  
    <div className='app-container section'>

    <div className="form-group row">
<div className="col-6">
    <div className="input-group input-group-lg">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-lg">Job</span>
  </div>
  <input type="text" value={this.state.searchTerm} onChange={evt => this.updateInputValue(evt)} className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
    </div>
    </div>


    <div className="col-6">
        <div className="input-group input-group-lg">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-lg">Location</span>
  </div>
  <input type="text" value={this.state.location} onChange={evt => this.updateLocation(evt)} className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
    </div>
    </div>
    </div>

     
      {this.state.return && <JobDetail data={this.state.apiInfo}/>} 

    </div>
    <a href="#" onClick={this.seeFaves}>See Favourites</a>
    {this.state.seeFaves && <Favs />}
  </div>
		)
	}
}

export default App