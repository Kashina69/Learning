# 6 Queue and Deque

### FIFO First in first out

```py
class Queue:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return len(self.items) == 0

    def insert(self, value):
        self.items.append(value)

    def delete(self):
        if self.isEmpty():
            print("Queue is Empty")
        else:
            return self.items.pop(0)


q = Queue()

q.insert(10)
q.insert(20)
q.insert(30)

print(q.delete())
print(q.delete())
print(q.delete())
print(q.delete())

```

## Double Ended Queue

```py

class DeQueue:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return len(self.items) == 0

    def insertAtFront(self, value):
        self.items.insert(0, value)

    def insertAtBack(self, value):
        self.items.append(value)

    def deleteFromFront(self):
        if self.isEmpty():
            print("Queue is Empty")
        else:
            return self.items.pop(0)

    def deleteFromBack(self):
        if self.isEmpty():
            print("Queue is Empty")
        else:
            return self.items.pop()

    def print(self):
        if self.isEmpty():
            print("Queue is Empty")
        else:
            print(self.items)



dq = DeQueue()

dq.insertAtFront(10)
dq.insertAtBack(20)
dq.insertAtFront(30)
dq.insertAtBack(40)
dq.insertAtFront(50)
dq.print()

print(dq.deleteFromBack())
print(dq.deleteFromBack())
print(dq.deleteFromFront())
print(dq.deleteFromFront())
print(dq.deleteFromBack())
dq.deleteFromBack()
dq.deleteFromFront()


```
