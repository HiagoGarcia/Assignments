class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
    }



    AddToQueue(data){
        const newNode = new QueueNode(data);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        return this;
    }

    CompareQueues(q2){
        let runner1 = this.head;
        let runner2 = q2.head;
        while(runner1.next || runner2.next){
            if(runner1.data === runner2.data){
                if(runner1.next == null && runner2.next != null){
                    return false;
                }
                if(runner1.next != null && runner2.next == null){
                    return false;
                }
                runner1 = runner1.next;
                runner2 = runner2.next;
            }
            if(runner1.data != runner2.data){
                return false
            }
        }
        return true;
    }

    isPalindrome(){
        let runner1 = this.head;
        let runner2 = this.tail;
        while(runner1 && runner2){
            if(runner1.data === runner2.data){
                runner1 = runner1.next;
                runner2 = runner2.previous;
            }
            if(runner1.data != runner2.data){
                return false
            }
        }
        return true
    }


}

class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

const q1 = new Queue();
const q2 = new Queue();
q1.AddToQueue(1)
q1.AddToQueue(2)
q1.AddToQueue(3)
q1.AddToQueue(2)
q1.AddToQueue(1)

q2.AddToQueue(1)
q2.AddToQueue(2)
q2.AddToQueue(3)
q2.AddToQueue(2)
q2.AddToQueue(2)


console.log(q1.CompareQueues(q2));
