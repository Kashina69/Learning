import math


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
    
    def findMiddleMyBruteForce(self):
        t1 = self.head
        size = 0
        middle_element = None
        i = 0
        while t1 is None:
            return
        while(t1.next != None):
            size = size+1
            t1 = t1.next
        t1 = self.head
        while(i < math.ceil((size/2)+1)):
            middle_element = t1.data
            t1 = t1.next
            i = i+1

        return middle_element

    def findMiddleBruteForce(self):
        # Step 1: Count the total nodes
        count = 0
        current = self.head
        while current:
            count += 1
            current = current.next

        if count == 0:
            return None

        # Step 2: Traverse to the middle element
        mid_index = count // 2  # For both odd/even, with 0-based index, this gives the first middle if even
        current = self.head
        for _ in range(mid_index):
            current = current.next
        return current.data

    def findMiddleTwoPointer(self):
        """
        Improved function to find the middle element of a singly linked list.
        Uses the fast and slow pointer approach to do it in a single traversal (O(n) time, O(1) space).
        Returns None if the list is empty.
        """
        slow = self.head
        fast = self.head

        if not self.head:
            return None

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow.data



obj = SinglyLinkedList()
obj.insertAtEnd(1)
obj.insertAtEnd(2)
obj.insertAtEnd(3)
obj.insertAtEnd(4)
obj.insertAtEnd(5)
# obj.insertAtEnd(6)
# obj.insertAtEnd(7)
print(obj.findMiddleBruteForce())
print(obj.findMiddleTwoPointer())
# obj.printAll()