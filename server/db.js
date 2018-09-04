module.exports = {
  getWidgets,
  saveWidget,
  deleteWidget
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
    widgets = widgets.filter((widget) => {
      return widget.id != id;
     })
}
