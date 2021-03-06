Resolutions = new Mongo.Collection("resolutions");
Articulos = new Mongo.Collection("articulos");

Meteor.publish("allResolutions", function() {
  return Resolutions.find();
})

Meteor.publish("userResolutions", function() {
  return Resolutions.find({user:this.userId});
})

Meteor.publish("allArticulos", function() {
  return Articulos.find();
})

Meteor.publish("buscar", function(codigo) {
  return Articulos.find({codigo:codigo});
})
