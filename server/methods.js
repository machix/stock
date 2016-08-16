Meteor.methods({
  addResolution(resolution) {
    Resolutions.insert({
      text: resolution,
      completed: false,
      createdAt: new Date()
    });
  },
  addArticulo(codigo,text) {
    Articulos.insert({
      codigo: codigo,
      descripcion: text,
      createdAt: new Date()
    });
  }
});
