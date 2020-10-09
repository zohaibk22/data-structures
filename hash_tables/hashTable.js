//turning a string into an integer for the array in the hashTable to be able to use the integer as an index
// This is a great hash function to spread out key values. works efficiently
const hashStringToInt = (s, tableSize) => {
  let hash = 17;

  for (let i = 0; i < s.length; i++) {
    //   Picking an arbitrary Hash function
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }

  return hash;
};

class HashTable {
  // use a prime number for your table array length...give a nice spread of the keys
  table = new Array(100);

  setItem = (key, value) => {
    const index = hashStringToInt(key, this.table.length);

    if (this.table[index]) {
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [[key, value]];
    }
    this.table[index] = [[key, value]];
    // chaining - > instad of storing a value, we will store an array
  };

  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length);
    return this.table[idx];
  };
}

const myTable = new HashTable();
myTable.setItem("firstName", "Zohaib");
myTable.getItem("firstName");
console.log(myTable.getItem("firstName"));
