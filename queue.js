const _Node = require('./_queueNode');
const _dNode = require('./_qDoubleNode');
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  //for doubly-linked lists
  enqueueD(data){
    const node = new _dNode(data);
    if (this.first === null) {
      this.first = node;
      this.first.next = null;
      this.first.prev = null;
    }
    if (this.last) {
      let previousLast = this.last;
      this.last.next = node;
      this.last.next.prev = previousLast;
    }
    this.last = node;
    this.last.next = null;
  }
  dequeueD() {
    if (this.first === null) {
      return;
    }

    let node = this.first;
    this.first = this.first.next;
    this.first.prev = null;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    
    let node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}

module.exports = Queue;