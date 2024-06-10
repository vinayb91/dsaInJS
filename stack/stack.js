class Stack {
    constructor(){
        this.stack = [];
    }
    push(data){
        this.stack.push(data);
    }

    pop(){
        this.stack.pop()
    }
    isEmpty(){
        return this.stack.length===0
    }

    peek(){
        return this.stack[this.stack.length-1];
    }

    printStack(){
        let str = ""
        for (let i = 0; i <this.stack.length; i++) {
            str+= this.stack[i]+ "\n"
            
        }
        return str
    }

    reverse(){
        return this.stack.reverse()
    }

    size(){
        return this.stack.length
    }

    clear(){
        this.stack = []
    }

    containsElement(element){
       return this.stack.includes(element)
    }
}

let mystack = new Stack()

mystack.push(3)
mystack.push(4)
mystack.push(6)
mystack.push(31)
mystack.pop()
console.log(mystack.printStack());
