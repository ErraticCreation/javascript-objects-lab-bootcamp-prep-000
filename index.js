var recipes = {};

var updateObjectWithKeyAndValue = function(object, key, value) {
  var newObject = Object.assign({ [key]: value }, object);
  return newObject;
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value) {
  object[key] = value;
  return object;
}

