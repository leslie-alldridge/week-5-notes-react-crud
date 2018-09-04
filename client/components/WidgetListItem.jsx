import React from 'react'

export default function WidgetListItem ({widget, showDetails, deleteDetails}) {
  return (
    <div className='widget-list-item'>
      {`${widget.name} `}
      <a href='#' onClick={() => showDetails(widget)}>Details</a>
      <a href='#' onClick={() => deleteDetails(widget)}>Delete</a>
    </div>
  )
}
