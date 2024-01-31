class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueueOne(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return this;
  }

  enqueue(arr) {
    if (!arr) return this;
    for (let i = 0; i < arr.length; i++) {
      this.enqueueOne(arr[i]);
    }

    return this;
  }

  dequeue() {
    if (this.tail === null) {
      return null;
    }

    let temp = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      temp.next = null;
    }

    return temp.value;
  }

  print() {
    if (this.head === null) {
      console.log(null);
      return;
    }

    let temp = this.head;
    while (temp !== null) {
      process.stdout.write(`${temp.value}->`);
      temp = temp.next;
    }
    process.stdout.write(`null\n`);
  }
}

// const main = () => {
//   try {
//     const testQueue = new Queue();
//     testQueue.enqueueOne(2);
//     testQueue.print(); // 2->null
//     testQueue.enqueueOne(3);
//     testQueue.print(); // 2->3->null
//     testQueue.dequeue();
//     testQueue.print(); // 3->null
//     testQueue.dequeue();
//     testQueue.print(); // null
//   } catch (error) {
//     console.log(error);
//   }
// };

// main();

module.exports = Queue;
