class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items[this.items.length - 1];
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

const stack = new Stack();

// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.pop();
// stack.push(4);
// console.log(stack.peek()); // 4
// stack.print(); // 1, 2, 4

module.exports = stack;
