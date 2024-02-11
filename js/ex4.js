import assert from "assert"; // ESM
// ⇒ const assert = require('assert'); // CJS
class Collection {
  _arr;

  constructor(...args) {
    this._arr = Array.isArray(args[0]) ? args[0] : args;
  }
  get _arr() {
    return this._arr;
  }

  isStack() {
    return this.constructor.name === "Stack";
  }

  push(value) {
    this._arr.push(value);
    return this;
  }

  get peek() {
    return this._arr.at(this.isStack() ? -1 : 0);
  }

  get poll() {
    return this.isStack() ? this._arr.pop() : this._arr.shift();
  }

  clear() {
    return (this._arr = []);
  }

  toArray() {
    return [...this._arr];
  }

  remove() {
    this.poll;
    return this;
  }

  get isEmpty() {
    return this.size === 0;
  }

  get size() {
    return this._arr?.length;
  }
}
class Stack extends Collection {
  pop() {
    return this._arr.pop();
  }
}
class Queue extends Collection {
  enqueue(value) {
    this.push(value);
    return this;
  }
  dequeue() {
    return this._arr.shift();
  }
}

const stack = new Stack();
stack.push(1).push(2).push(3).push(5);
assert.deepStrictEqual(stack.toArray(), [1, 2, 3, 5]);
stack.pop();
assert.strictEqual(stack.peek, 3);
stack.remove();
assert.strictEqual(stack.poll, 2);
assert.deepStrictEqual(stack.toArray(), [1]);
const queue = new Queue();
queue.enqueue(1).enqueue(3).enqueue(5);
queue.dequeue();
assert.deepStrictEqual(queue.toArray(), [3, 5]);
assert.strictEqual(queue.poll, 3);
assert.deepStrictEqual(queue.toArray(), [5]);
if (!stack.isEmpty) stack.clear();
if (queue.size) queue.clear();
assert.deepStrictEqual(stack.toArray(), []);
assert.deepStrictEqual(queue.toArray(), []);
