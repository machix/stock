Meteor.methods({
  addResolution(resolution) {
    if(!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Resolutions.insert({
      text: resolution,
      completed: false,
      createdAt: new Date(),
      user:Meteor.userId()
    });
  },
  toggleResolution(resolution) {
    if(Meteor.userId() !== resolution.user) {
      throw new Meteor.Error('not-authorized');
    }
    Resolutions.update(resolution._id, {
      $set: {completed: !resolution.completed}
    });
  },
  deleteResolution(resolution) {
    if(Meteor.userId() !== resolution.user) {
      throw new Meteor.Error('not-authorized');
    }
    Resolutions.remove(resolution._id);
  },
  addArticulo(codigo,text) {
    Articulos.insert({
      codigo: codigo,
      descripcion: text,
      createdAt: new Date()
    });
  }
});
