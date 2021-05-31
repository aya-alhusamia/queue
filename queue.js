class Node{
    constructor(groupSize, next=null){
      this.groupSize = groupSize;
      this.next = next;
    }
  }
  
  class Queue{
      constructor(limit=10, front=null, back=null){
        this.front=front
        this.back=back
        this.limit=limit
        this.size=0
        this.watingTime=0
      }
      isFull=()=>this.size===this.limit
      isEmpty=()=>this.size===0
      addingNode=(groupSize)=>{
        const newnode =new Node(groupSize)
        if(this.isEmpty())
       this.front= newnode
       else this.back.next = newnode
       this.back=newnode
        this.size++
        this.watingTime+=groupSize*0.5

      }
      enqueue=(groupSize)=>{
        if(this.isFull()){
          console.log("is Empty")
        }
        else{
          let numberOf=groupSize
          while(numberOf > 12){
            this.addingNode(12)
            numberOf-=12
          }
          this.addingNode(numberOf)
        }
      }
      dequeue=()=>{
        if(this.isEmpty())
        console.log("No one empty")
        else if(this.size===1){
          let removeNode=this.front
          this.front=null
          this.back=null
          this.size=0
          this.watingTime=0
          return removeNode.groupSize
        }
        else{
          let removeNode=this.front
          this.front=removeNode.next
          this.size--
          this.watingTime-= removeNode.groupSize*0.5
          return removeNode.groupSize
        }
      }
    }
    const ride = new Queue()
    console.log(ride.watingTime)
    ride.enqueue(2)
    ride.enqueue(3)
    ride.enqueue(4)
    ride.enqueue(5)
    console.log(ride.watingTime)
    console.log(ride.dequeue())
    console.log(ride.watingTime)

