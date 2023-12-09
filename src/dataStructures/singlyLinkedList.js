class Node {
    constructor(val) {
        this.val = val,
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
            console.log("this", this)
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
        if(this.length === 0) {
            this.head = this.tail = null;
        }
        // Return the value of the node removed
        return temp
    }
}

const linkedList = new SinglyLinkedList()

console.log(JSON.stringify(linkedList.push("elem1")))
console.log(JSON.stringify(linkedList.push("elem2")))
console.log(JSON.stringify(linkedList.push(22)))
console.log(JSON.stringify(linkedList.push(34)))
console.log(JSON.stringify(linkedList.pop()))
console.log(JSON.stringify(linkedList.pop()))
console.log(JSON.stringify(linkedList.pop()))
console.log(JSON.stringify(linkedList.pop()))
console.log(linkedList)