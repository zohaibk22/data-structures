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
  table = new Array(3);
  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const index = hashStringToInt(key, newTable.length);
          if (newTable[index]) {
            // if not empty, push the new value into the table array at the next available index
            newTable[index].push([key, value]);
          } else {
            //if empty, just make that specific index equal to the key value pair
            newTable[index] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };
  //   loadFactor = this.numItems / this.table.length; //for resizing array

  setItem = (key, value) => {
    this.numItems++;
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor > 0.8) {
      //resize
      this.resize();
    }
    const index = hashStringToInt(key, this.table.length);

    //checking to see if current index is empty
    if (this.table[index]) {
      // if not empty, push the new value into the table array at the next available index
      this.table[index].push([key, value]);
    } else {
      //if empty, just make that specific index equal to the key value pair
      this.table[index] = [[key, value]];
    }
    this.table[index] = [[key, value]];
    // chaining - > instad of storing a value, we will store an array
  };

  getItem = (key) => {
    const index = hashStringToInt(key, this.table.length);

    if (!this.table[index]) {
      return null;
    }

    return this.table[index].find((x) => x[0] === key)[1]; //since [key,value] is now an array, we just want the value, which by default will be at index 1
    // ^^ finding the first element in our array that is equal to the key we are a requesting
  };
}

const myTable = new HashTable();
myTable.setItem("firstName", "Zohaib");
console.log(myTable.table.length);
myTable.setItem("lastName", "Khan");
myTable.setItem("age", 22);

console.log(myTable.getItem("age"));

//Tips: set a large prime number for table size so we avoid collisions
