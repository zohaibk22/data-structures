function mySet() {
  let collection = [];

  //checks for the presence of an alement and returns true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
    //if the element is not in the collection, return -1, or false
  };

  //this method will return all the values in the set
  this.values = function () {
    return collection;
  };

  //this method will add an elment to the set

  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  //this method removes the selected element from the set
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection(index, 1);
      return true;
    }
    return false;
  };

  //this method returns the size of the array
  this.size = function () {
    return collection.length;
  };

  this.union = function () {};
}
