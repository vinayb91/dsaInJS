class Queue{
    constructor(){
        this.queue = []
    }
    enqueue(data){
        this.queue.push(data)
    }

    dequeue(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        return this.queue.shift()
    }
    size(){
        return this.queue.length
    }

    isEmpty(){
        return this.queue.length===0
    }
    
    peek(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        return this.queue[0]
    }
    ispresent(element){
        return this.queue.includes(element)
    }
    printQueue(){
        let str = ""
        for (let i = 0; i < this.queue.length; i++) {
          str += this.queue[i] + "\n"
            
        }
        return str
    }
   
}

let myqueue = new Queue()

myqueue.enqueue(34)
myqueue.enqueue(2)
myqueue.enqueue(234)
myqueue.enqueue(67)
myqueue.enqueue(4)
myqueue.enqueue(23)
myqueue.dequeue()

console.log(myqueue.isEmpty());
