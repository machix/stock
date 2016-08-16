Resolutions = new Mongo.Collection("resolutions");
Articulos = new Mongo.Collection("articulos");

Meteor.publish("allResolutions", function() {
  return Resolutions.find();
})

Meteor.publish("allArticulos", function() {
  return Articulos.find();
})
