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

  this.union = function (otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach((e) => {
      unionSet.add(e);
    });

    secondSet.forEach((e) => {
      unionSet.add(e);
    });

    return unionSet;
  };

  //this will return the intersection of two sets
  this.intersection = function (otherSet) {
    let intersectionSet = new mySet();

    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  this.difference = function (otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  this.subset = function (otherSet) {
    let firstSet = this.values();
    // the every meth0d tests whetehr all the elements in array pass the test implemented by the given function
    return firstSet.every(function (values) {
      return otherSet.has(values);
    });
  };
}

let setA = new mySet();
let setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");

console.log(setA.subset(setB));
console.log(setA.union(setB).values());
console.log(setA.intersection(setB).values());
console.log(setA.difference(setB).values());
