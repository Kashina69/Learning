# 4 Doubly and Circular Linked List

## Doubly Linked List

```py
class Node:
    def __init__(self, data, prev = None, next = None):
        self.prev = prev
        self.data = data
        self.next = next

class DoublyLinkedList:
    def __init__(self, head=None):
        self.head = head
    
    def insertAtStart(self, value):
        temp = Node(value)
        if self.head == None:
            self.head = temp
            return
        temp.next = self.head
        self.head.prev = temp
        self.head = temp

   
    def insertAtMiddle(self, value, x):
        t = self.head

        # Search for node with data == x
        while t is not None:
            if t.data == x:
                break
            t = t.next

        if t is None:
            # x was not found, cannot insert after x
            print(f"Node with value {x} not found.")
            return

        temp = Node(value)
        temp.next = t.next
        temp.prev = t

        if t.next is not None:
            t.next.prev = temp
        t.next = temp

    def insertAtEnd(self, value):
        temp = Node(value)
        if(self.head == None):
            self.head = temp
            return
            
        t = self.head
        while(t.next != None):
            t = t.next
        t.next = temp
        temp.prev = t
    
    def deleteElement(self, value):
        if(self.head == None):
            print("Linked List is Empty")
            return
        
        t  = self.head
        if(t.data == value):
            self.head = t.next
            self.head.prev = None
            return
        
        while(t.next != None):
            if(t.data == value):
                t.prev.next = t.next
                t.next.prev = t.prev
                return
            else:
                t = t.next
        if (t.data == value):
            t.prev.next = None


    def printAll(self):
        t = self.head
        while(t.next != None):
            prev_data = t.prev.data if t.prev else None
            next_data = t.next.data if t.next else None
            print(t.data, "and prev is", prev_data, "and next is", next_data)
            t = t.next
        prev_data = t.prev.data if t.prev else None
        next_data = t.next.data if t.next else None
        print(t.data, "and prev is", prev_data, "and next is", next_data)




obj = DoublyLinkedList()
obj.insertAtEnd(1)
obj.insertAtEnd(2)
obj.insertAtEnd(3)
obj.insertAtEnd(4)
obj.insertAtStart(0)
obj.insertAtStart(-1)
obj.insertAtMiddle(5, 2)
obj.insertAtMiddle(6, 4)
obj.deleteElement(5)
obj.deleteElement(6)
obj.printAll()

```

## Circular Doubly Linked List

```py
class Node:
    def __init__(self, data, prev=None, next=None):
        self.data = data
        self.prev = prev
        self.next = next

class CircularDoublyLinkedList:
    def __init__(self):
        self.head = None

    def insertAtStart(self, value):
        temp = Node(value)
        if self.head is None:
            temp.next = temp
            temp.prev = temp
            self.head = temp
        else:
            last = self.head.prev
            temp.next = self.head
            temp.prev = last
            last.next = temp
            self.head.prev = temp
            self.head = temp

    def insertAtEnd(self, value):
        temp = Node(value)
        if self.head is None:
            temp.next = temp
            temp.prev = temp
            self.head = temp
        else:
            last = self.head.prev
            temp.next = self.head
            temp.prev = last
            last.next = temp
            self.head.prev = temp

    def insertAtMiddle(self, value, x):
        if self.head is None:
            print(f"List is empty, cannot insert after {x}")
            return

        t = self.head
        found = False
        while True:
            if t.data == x:
                found = True
                break
            t = t.next
            if t == self.head:
                break

        if not found:
            print(f"Node with value {x} not found.")
            return

        temp = Node(value)
        temp.next = t.next
        temp.prev = t
        t.next.prev = temp
        t.next = temp

    def deleteElement(self, value):
        if self.head is None:
            print("Linked List is Empty")
            return

        current = self.head
        found = False
        while True:
            if current.data == value:
                found = True
                break
            current = current.next
            if current == self.head:
                break

        if not found:
            print(f"Node with value {value} not found.")
            return

        # Only node in the list
        if current.next == current and current.prev == current:
            self.head = None
            return

        # If deleting head node
        if current == self.head:
            self.head = current.next

        current.prev.next = current.next
        current.next.prev = current.prev

    def printAll(self):
        if self.head is None:
            print("List is empty.")
            return
        t = self.head
        while True:
            prev_data = t.prev.data if t.prev else None
            next_data = t.next.data if t.next else None
            print(t.data, "and prev is", prev_data, "and next is", next_data)
            t = t.next
            if t == self.head:
                break

# Example usage
obj = CircularDoublyLinkedList()
obj.insertAtEnd(1)
obj.insertAtEnd(2)
obj.insertAtEnd(3)
obj.insertAtEnd(4)
obj.insertAtStart(0)
obj.insertAtStart(-1)
obj.insertAtMiddle(5, 2)
obj.insertAtMiddle(6, 4)
obj.deleteElement(5)
obj.deleteElement(6)
obj.printAll()

```
