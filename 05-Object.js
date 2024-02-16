// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);// keys() method is used to get the keys of an object as an array.
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);// values() method is used to get the values of an object as an array.
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);// entries() method is used to get the key-value pairs of an object as an array.
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");// hasOwnProperty() method is used to check if an object has a property with the given name.
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });// assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
