// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList extends Node {
//   constructor() {
//     super(data);
//     this.head = null;
//     this.size = 0;
//   }

//   //insert first node

//   insertFirst() {
//     this.head = new Node(data, this.head);
//   }

//   //insert last node
//   //insert at a index

//   //retrieve an index

//   //remove at index

//   // cearl list

//   //print list data
//   printListData() {
//     let currentNode = this.head;

//     while (current) {
//       console.log(current.data);
//       currentNode = currentNode.next;
//     }
//   }
// }

// const ll = new LinkedList();

// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);

// console.log(ll);

// console.log(ll.printListData());

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  //add to the end of the list/tail
  append(data) {
    //if list is empty

    if (!this.tail) {
      this.head = this.tail = new Node(data);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(data);
      oldTail.next = this.tail;
      this.tail.previous = oldTail;
    }
  }

  //dadd to the beginning of the linked list
  prepend(data) {
    //if the list is empty
    if (!this.head) {
      this.head = this.tail = new Node(data);
    } else {
      let oldHead = this.head;
      this.head = new Node(data);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }

  deleteHead(data) {
    if (!this.head) {
      return null;
    } else {
      let removeHead = this.head;

      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }

      return removeHead.data;
    }
  }

  deleteTail(data) {
    if (!this.tail) {
      return null;
    } else {
      let removeTail = this.tail;

      //if one node left

      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }

      removeTail.data;
    }
  }

  search(data) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

class Node {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev || null;
    this.next = next || null;
  }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend(12);
list.prepend(42);

list.search(999);

console.log(list);
