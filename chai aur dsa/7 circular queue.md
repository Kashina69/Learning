# 7 Circular Queue

```py
class CircularQueue:
    def __init__(self, size) -> None:
        self.size = size
        self.items = [None] * size
        self.front = -1
        self.rear = -1
        # self.front = self.rear = -1

    def enqueue(self, value):
        print(self.items)
        # Checking if the queue is full
        if ((self.rear + 1) % self.size == self.front):
            print("Can't add element queue is full")
        # Checking if queue is empty if soo then set the value of front and rear to 0 index and set value at the rear of the queue
        elif self.front == -1:
            self.front = self.rear = 0
            self.items[self.rear] = value
        # Increasing the rear pointer in a circular manner using a modulo operatior, so if rear reaches the end of the arrya it wraps around to the start and then we assign the value to the rear position
        else:
            self.rear = (self.rear + 1) % self.size
            self.items[self.rear] = value

    def dequeue(self):
        print(self.items, "from dequeue")
        # Checking if the queue is empty
        if (self.front == -1):
            print("Can't remove element queue is empty")
        # Checking if there are no element then self front and rear to -1 soo the above logic hold true
        elif self.front == self.rear:
            self.front = self.rear = -1
        # just changing the value of the front pointer to point where the front is 
        else:
            self.front = (self.front + 1) % self.size
            print(self.front)
            self.items[self.front - 1] = None

            

cq = CircularQueue(5)

cq.enqueue(10)
cq.enqueue(20)
cq.enqueue(30)
cq.enqueue(40)
cq.enqueue(50)
cq.dequeue()
cq.enqueue(60)
cq.dequeue()
cq.dequeue()
cq.dequeue()
cq.dequeue()
cq.dequeue()
cq.dequeue()
cq.dequeue()

```