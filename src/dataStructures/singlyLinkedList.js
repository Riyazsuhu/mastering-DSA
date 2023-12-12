class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        //This function should accept a value
        // Create a new node using the value passed to the function
        const node = new Node(val)
        // If there is no head property on the list, set the head and tail to be the newly created node
        if (!this.head) {
            this.head = node
            this.tail = this.head
        }
        // Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
        else {
            this.tail.next = node
            this.tail = node
        }
        // Increment the length by one
        this.length++
        // Return the linked list
        return this
    }
    pop() {
        //If there are no nodes in the list, return undefined
        if (this.length === 0) return undefined
        // Loop through the list until you reach the tail
        let pre = this.head,
            temp = pre;
        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        // Set the next property of the 2nd to last node to be null
        pre.next = null
        // Set the tail to be the 2nd to last node
        this.tail = pre
        // Decrement the length of the list by 1
        this.length--;
        if (this.length === 0) {
            this.head = this.tail = null;
        }
        // Return the value of the node removed
        return temp.val
    }
    shift() {
        // check if there is node in list return und
        if (this.length === 0) return undefined
        // copy the next elem of first node in list
        const newHead = this.head
        this.head = newHead.next
        // decrement length
        this.length--;
        // if there is no node
        if (this.length === 0) {
            this.tail = null;
        }
        return newHead.val
    }
    unshift(val) {
        // check if there is no node update tail and head
        const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = this.head
        }
        // otherwise add the node to the beginning of list
        else {
            node.next = this.head
            this.head = node
        }
        this.length++;
        return this
    }
    get(index) {
        // check the index is negative or greater or equal to length return null
        if (index < 0 || index >= this.length) return null
        // loop through the list by index and return value 
        let elem = this.head;
        for (let i = 0; i < index; i++) {
            elem = elem.next
        }
        // return elem value
        return elem
    }
    set(index, val) {
        // get the node from our list using get method
        const node = this.get(index)
        // if node is not null update the node value with set value
        if (node) {
            node.val = val
            return true
        }
        // the index is not found return false
        return false
    }
    insert(index, value) {
        // if the index is less then 0 or greter then length return false
        if (index < 0 || index > this.length) return false
        // if index === 0 use unshift 
        if (index === 0) this.unshift(value)
        // else if index === length use push
        else if (index === this.length) this.push(value)
        // else insert element by using get index - 1 element
        else {
            const prevNode = this.get(index - 1),
                newNode = new Node(value),
                temp = prevNode.next;
            newNode.next = temp
            prevNode.next = newNode
            this.length++;
        }
        return true
    }
    remove(index) {
        // if the index is less then 0 or greter then length return false
        if (index < 0 || index > this.length) return false
        // if index === 0 use shift to remove element elem from beginning
        if (index === 0) this.shift()
        // else if length - 1 === index remove element at end using pop method
        else if (index === this.length - 1) this.pop()
        // otherwise find remove element if it is inbetween
        else {
            // find the prev node of remove index
            const prevNode = this.get(index - 1);
            prevNode.next = prevNode.next.next
            this.length--;
        }
        // return true
        return true
    }
    reverse() {
        // Create a variable called next
        // Create a variable called prev
        // Create a variable called node and initialize it to the head property
        let node = this.head,
            next,
            prev = null;
        // Swap the head and tail
        [this.head, this.tail] = [this.tail, this.head]
        // Loop through the list
        for (let i = 0; i < this.length; i++) {
            // Set next to be the next property on whatever node is
            next = node.next
            // Set the next property on the node to be whatever prev is
            node.next = prev
            // Set prev to be the value of the node variable
            prev = node
            // Set the node variable to be the value of the next variable
            node = next
            console.log("presentation", JSON.stringify({
                "head---->": this.head,
                "tail---->": this.tail,
                "next---->": next,"prev---->": prev,"node---->": node
            }))
        }
        // Once you have finished looping, return the list
        return this
    }
}

const linkedList = new SinglyLinkedList()

console.log(JSON.stringify(linkedList.push("elem1")))
console.log(JSON.stringify(linkedList.push("elem2")))
console.log(JSON.stringify(linkedList.push(22)))
console.log(JSON.stringify(linkedList.push(34)))
console.log(JSON.stringify(linkedList.pop()))
console.log(JSON.stringify(linkedList.shift()))
console.log(JSON.stringify(linkedList.unshift(233)))
console.log(JSON.stringify(linkedList.get(1)))
console.log(JSON.stringify(linkedList.set(1, "Riyaz")))
console.log(JSON.stringify(linkedList.insert(1, "Haseena")))
console.log(JSON.stringify(linkedList.insert(3, "Test")))
console.log(JSON.stringify(linkedList.remove(1)))
console.log(JSON.stringify(linkedList))
console.log(JSON.stringify(linkedList.reverse(1)))