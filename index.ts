class LinkedList {
  public head: any;
  public length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(value: any) {
    const node = new Node(value, null);
    if (this.head === null && this.length === 0) {
      this.head = node;
    } else {
      let tail = this.showTail();
      tail.next = node;
    }
    this.length++;
    return this.head;
  }
  prepend(value: any) {
    const node = new Node(value, this.head);
    if (this.head === null && this.length === 0) {
      this.head = node;
    } else {
      const tmp = this.head;
      this.head = node;
      this.head.next = tmp;
    }
    this.length++;
  }
  size() {
    return this.length;
  }
  showHead() {
    return this.head;
  }
  showTail() {
    let node = this.head;
    if (this.length === 0) {
      return null;
    }
    while (node) {
      if (node.next === null) {
        return node;
      } else {
        node = node.next;
      }
    }
  }
  at(idx: number) {
    let node = this.head;
    let curr = null;
    if (idx >= this.length) {
      return undefined;
    }
    for (let i = 0; i <= idx; i++) {
      curr = node;
      node = node.next;
    }
    return curr;
  }
  pop() {
    let node = this.head;
    if (this.length === 1) {
      this.head = null;
      this.length = 0;
      return this.head;
    }
    while (node) {
      if (node.next.next === null) {
        node.next = null;
        this.length--;
        return this.head;
      } else {
        node = node.next;
      }
    }
  }
  contains(value: any) {
    let node = this.head;
    while (node) {
      if (node.next === null) {
        return false;
      }
      if (node.value === value) {
        return true;
      } else {
        node = node.next;
      }
    }
  }
  find(value: any) {
    let node = this.head;
    let idx = 0;
    while (node) {
      if (node.next === null && node.value != value) {
        return undefined;
      }
      if (node.value === value) {
        return idx;
      } else {
        node = node.next;
        idx++;
      }
    }
  }
  toString() {
    return JSON.stringify(this.head);
  }
  insertAt(value: any, idx: number) {
    let node = this.head;
    let prev = this.head;
    if (idx === 0) {
      const tmp = this.head;
      this.head = new Node(value, tmp);
      return this.head;
    }
    for (let i = 0; i <= idx; i++) {
      if (node.next === null) {
        break;
      }
      prev = node;
      node = node.next;
    }
    prev.next = new Node(value, node);
    this.length++;
    return this.head;
  }
  removeAt(idx: number) {
    if (idx >= this.length) {
      return undefined;
    }
    if (idx === 0) {
      this.head = this.head.next;
      this.length--;
      return this.head;
    }
    let node = this.at(idx);
    let prev = this.at(idx - 1);
    const tmp = node.next;
    node = null;
    prev.next = tmp;
    this.length--;
    return this.head;
  }
}
class Node {
  public value: any;
  public next: any;
  constructor(value: any, next: any) {
    this.value = value;
    this.next = next;
  }
}
let list = new LinkedList();
list.append(13);
list.append(15);
list.append(20);
list.removeAt(0);
console.log(JSON.stringify(list));
