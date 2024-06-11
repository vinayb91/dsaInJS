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