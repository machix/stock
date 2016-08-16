Meteor.methods({
  addResolution(resolution) {
    Resolutions.insert({
      text: resolution,
      completed: false,
      createdAt: new Date()
    });
  },
  toggleResolution(id, status) {
    Resolutions.update(id, {
      $set: {completed: !status}
    });
  },
  deleteResolution(id) {
    Resolutions.remove(id);
  },
  addArticulo(codigo,text) {
    Articulos.insert({
      codigo: codigo,
      descripcion: text,
      createdAt: new Date()
    });
  }
});
