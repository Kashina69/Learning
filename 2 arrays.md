# 2 Array in Python

```py
import array

val = array.array('i', [1,2,3,4,5,6])

print(val)

for i in range(0, len(val)):
    print("value of i is " + val[i])

print(val.typecode)

val.reverse()

for i in range(0, len(val)):
    print("value of i is " + val[i])

val.insert(1, 50) # add value 50 at index 1 not change
val.append(100) # add 100 at the end of the array
val.pop(3) # remove the 3 index but if no index then remove the last element
val.remove (15) # remove the element writen in it

copyArray = array.array(val.typecode,( x for x in val ))

for i in range(0, len(copyArray)):
    print("value of i is " + copyArray[i])


```

## Numpy

numpy lets you make hetroginus array so basically different datatypes can be in the same array unlink the array module which will only let you have one type in an array

```py
import numpy as np

val = np.array([1,2,3,4,5,6,"prince"])

val = np.array([1,2,3,4,5,6], float) # you can also have homoginus array too

val = np.linspace(10, 20, 5) # count numbers from 10 to 20 split into 5 equal parts so in this case 10.0, 12.5, 15.0, 17.5, 20.0

val = np.arange(10, 20, 2) # start from 10 end 20-1 and with a gap of 2

val = np.logspace(10, 20, 2)

val = np.zeros(10) # makes an array of 10 element and the number is 0

val = np.ones(10) # makes an array of 10 element and the number is 1

val = np.full(10, 5) #  makes an array of 10 element and number is 5

zero = array(10) # zero dimentional array

one = array([1, 2, 3, 4]) # one dimentional array

two = array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

three = np.array([
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
])

three = array()
for x in val:
    print(x, end=" ")

```
