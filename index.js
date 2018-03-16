var recipes = {};

var updateObjectWithKeyAndValue = function(object, key, value) {
  var newObject = Object.assign({ [key]: value }, object);
  return newObject;
}