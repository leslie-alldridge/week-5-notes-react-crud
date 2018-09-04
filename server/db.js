module.exports = {
  getWidgets,
  saveWidget,
  deleteWidget,
  updateWidget
}

let widgets = [{
  id: 1,
  name: 'Red widget',
  price: 23.45,
  mfg: 'Acme Inc.',
  inStock: 4,
  rating: 5
}, {
  id: 2,
  name: 'Blue widget',
  price: 423.47,
  mfg: 'Acme Inc.',
  inStock: 8,
  rating: 5
}, {
  id: 3,
  name: 'Yellow widget',
  price: 123.40,
  mfg: 'Acme Inc.',
  inStock: 3,
  rating: 5
}]

function getWidgets () {
  return widgets
}

function saveWidget (widget) {
  widget.id = widgets.length + 1
  widgets.push(widget)
}

function deleteWidget (id) {
  //console.log(id);

  
    widgets = widgets.filter((widget) => {
      return widget.id != id;
    })
}

function updateWidget (id, widget) {
  let nid = id - 1;
  
  console.log(id);
   widget = {
    id: Number(id),
    name: widget.name,
    price: widget.price,
    mfg: widget.mfg,
    inStock: widget.inStock,
    rating: widget.rating
   }
   console.log(widget);
   let foundWidget = widgets[nid];

   foundWidget = widget;

   widgets[nid] = foundWidget

}
