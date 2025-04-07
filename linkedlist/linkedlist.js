class Node{
    constructor(data,next=null){
        this.data = data;
        this.next= next;
    }
}

class Linkedlist{
    constructor(){
        this.head=null;
    }
}

Linkedlist.prototype.insertAtBeginning = function (data) {
    const newNode = new Node(data)
    this.head=newNode
}

Linkedlist.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data)
    if (!this.head) {
       this.head=newNode
    }
    let last = this.head
    while(last.next){
        last = last.next
    }
    last.next= newNode
}

Linkedlist.prototype.insertAt = function (data, previousNode) {
    if (!previousNode) {
        console.log("previous node is required");
        return
    }
    const newNode = new Node(data,previousNode.next)
    previousNode.next = newNode
}

Linkedlist.prototype.deleteFirstNode = function () {
    if (!this.head) {
        return
    }
    this.head = this.head.next
}

Linkedlist.prototype.deleteLastNode = function () {
    if(!this.head){
        return
    }
    let last = this.head

    while(last.next.next){
        last = last.next
    }
    last.next = null
}