# 5 Stack

LIFO Last in first out


```py
class Stack:
    def __init__(self):
        self.s = []

    def length(self):
        return len(self.s)

    def push(self, value):
        self.s.append(value)

    def peek(self):
        if len(self.s) == 0:
            raise Exception("Stack is Empty")
        else:
            return self.s[0]
    
    def pop(self):
        if len(self.s) == 0:
            raise Exception("Stack is Empty")
        else:
            return self.s.pop(len(self.s)-1)

stk = Stack()
stk.push(10)
stk.push(20)
stk.push(30)
print(stk.peek())
print(stk.pop())
print(stk.pop())
print(stk.pop())
print(stk.s)
```