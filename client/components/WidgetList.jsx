import React from 'react'

import WidgetListItem from './WidgetListItem'

export default function WidgetList (props) {
  return (
    <div className='widget-list'>
      <h2>List</h2>
      {props.widgets.map(widget => {
        // console.log(widget);
        
        return <WidgetListItem
          key={widget.name}
          widget={widget}
          hideDetails={props.hideDetails}
          showDetails={props.showDetails} 
          deleteDetails={props.deleteDetails}
          showUpdate={props.showUpdate}
          />
      })}
    </div>
  )
}
