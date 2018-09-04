import React from 'react'

import {updateWidget, getWidgets} from '../api'

export default class UpdateWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      mfg: '',
      inStock: '',
      rating: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.updatedWidget = this.updatedWidget.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updatedWidget (e) {
    let newEntry = this.state
    let id = this.props.widgetIDToUpdate
    updateWidget(newEntry, id)
    this.props.getWidgets(this.props.refreshList)
  }
  
  render () {
    
    return (
      <div className='update-widget'>
        <form>
          <p><input placeholder='Name' name='name'
            onChange={this.handleChange}
            value={this.state.name}
          /></p>
          <p><input placeholder='Price' name='price'
            onChange={this.handleChange}
            value={this.state.price}
          /></p>
          <p><input placeholder='Manufacturer' name='mfg'
            onChange={this.handleChange}
            value={this.state.mfg}
          /></p>
          <p><input placeholder='In stock' name='inStock'
            onChange={this.handleChange}
            value={this.state.inStock}
          /></p>
          <p><input placeholder='Rating' name='rating'
            onChange={this.handleChange}
            value={this.state.rating}
          /></p>
          <button type='button' onClick={this.updatedWidget}>Update Widget</button>
          {' '}
          <a href='#' onClick={this.props.finishAdd}>Cancel</a>
        </form>
      </div>
    )
  }
}
