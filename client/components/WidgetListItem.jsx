import React from 'react'

export default function WidgetListItem ({widget, showDetails, deleteDetails, showUpdate}) {
  return (
    <div className='widget-list-item'>
      {`${widget.name} `}
      <a href='#' onClick={() => showDetails(widget)}>Details</a>
      <a href='#' id={widget.id} onClick={() => showUpdate(widget, widget.id)}>Update</a>
      <a href='#' onClick={() => deleteDetails(widget)}>Delete</a>
    </div>
  )
}
