class Queue {
  constructor() {
    this.items = [];
  }

  offer(element) {
    this.items.push(element);
  }

  poll() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  print() {
    console.log(this.items.join(", "));
  }
}

const queue = new Queue();

// queue.offer("A");
// queue.offer("B");
// queue.offer("C");
// console.log(queue.poll()); // A
// queue.offer("D");
// console.log(queue.peek()); // B
// queue.print(); // B, C, D

module.exports = queue;