import React from 'react'

import AddWidget from './AddWidget'
import WidgetList from './WidgetList'
import WidgetDetails from './WidgetDetails'
import ErrorMessage from './ErrorMessage'
import UpdateWidget from './UpdateWidget'

import {getWidgets, deleteWidget} from '../api'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      error: null,
      widgets: [],
      activeWidget: null,
      detailsVisible: false,
      addWidgetVisible: false,
      showUpdate: false,
      updateWidget: 1
    }

    this.refreshList = this.refreshList.bind(this)
    this.showDetails = this.showDetails.bind(this)
    this.hideDetails = this.hideDetails.bind(this)
    this.renderWidgets = this.renderWidgets.bind(this)
    this.showAddWidget = this.showAddWidget.bind(this)
    this.deleteDetails = this.deleteDetails.bind(this)
    this.showUpdate = this.showUpdate.bind(this)
    this.submitUpdate = this.submitUpdate.bind(this)
  }

  componentDidMount () {
    this.refreshList()
  }

  renderWidgets (err, widgets) {
    this.setState({
      error: err,
      widgets: widgets || []
    })
  }

  refreshList (err) {
    this.setState({
      error: err,
      addWidgetVisible: false,
      showUpdate: false
    })
    getWidgets(this.renderWidgets)
  }

  showAddWidget () {
    this.setState({
      addWidgetVisible: true
    })
  }

  showUpdate (widget, id) {
   console.log(widget);
   console.log(id);
    this.setState({
      showUpdate: true,
      updateWidget: widget.id
    })
  }

  submitUpdate(widget, id) {

  }

  showDetails (widget) {
    this.setState({
      activeWidget: widget,
      detailsVisible: true
    })
  }

  deleteDetails (widget) {
    deleteWidget(widget).then(() => {
      this.refreshList()
      getWidgets(this.renderWidgets)
    })
  }

  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  }

  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />

        <h1>Widgets FTW!</h1>
        <button onClick={this.refreshList}>Refresh</button>
        <WidgetList
          showDetails={this.showDetails}
          widgets={this.state.widgets} 
          deleteDetails={this.deleteDetails}
          showUpdate={this.showUpdate}
          />

        <p>
          <a id='show-widget-link' href='#'
            onClick={this.showAddWidget}>Add widget</a>
        </p>

        {this.state.addWidgetVisible && <AddWidget
          finishAdd={this.refreshList} />}

        {this.state.showUpdate && <UpdateWidget 
        refreshList={this.refreshList}
        getWidgets={getWidgets}
        renderWidgets={this.renderWidgets}
          widgetIDToUpdate={this.state.updateWidget}
          submitUpdate = {this.submitUpdate}
          finishAdd={this.refreshList}
        />}  

        {this.state.detailsVisible && <WidgetDetails
          isVisible={this.state.detailsVisible}
          hideDetails={this.hideDetails}
          widget={this.state.activeWidget} />}
      </div>
    )
  }
}
