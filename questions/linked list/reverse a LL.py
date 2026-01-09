class Node:
    def __init__(self, data, next = None):
        self.data = data
        self.next = next

class SinglyLinkedList:
    def __init__(self, head=None):
        self.head = head
    
    def insertAtStart(self, value):
        temp = Node(value)
        temp.next = self.head
        self.head = temp
   
    def insertInMiddle(self, value, x):
        temp = Node(value)
        t1 = self.head

        while(t1.next != None):
            if(t1.data == x):
                temp.next = t1.next
                t1.next = temp
            t1 = t1.next

    def insertAtEnd(self, value):
        temp = Node(value)
        if(self.head != None):
            t1 = self.head
            while(t1.next != None):
                t1 = t1.next
            t1.next = temp
        else:
            self.head = temp
    
    def deleteElement(self, value):
        t1 = self.head
        prev = t1
        if(t1.data == value):
            self.head = t1.next
        while(t1.next != None):
            if (t1.data == value):
                prev.next = t1.next
                break
            else:
                prev = t1
                t1 = t1.next
        if(t1.data == value):
            prev.next = None

    def printAll(self):
        t1 = self.head
        if t1 is None:
            return
        while(t1.next != None):
            print(t1.data)
            t1 = t1.next
        print(t1.data)

    def reverseLL(self):
        prev = None
        current = self.head
        while current is not None:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        self.head = prev



obj = SinglyLinkedList()
obj.insertAtEnd(1)
obj.insertAtEnd(2)
obj.insertAtEnd(3)
obj.insertAtEnd(4)
obj.insertAtEnd(5)
obj.printAll()
obj.reverseLL()
print("reversed linked list")
obj.printAll()