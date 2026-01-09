# 8 Recursion 

- function calling itself is called recursion 
- iterative code
- recursive code

### Factorial with recursion

```py
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(6))

```
### Fibonacci series with recursion

```py
def fibonacciSeries(n):
    if (n == 1 or n == 2):
        return 1
    return fibonacciSeries(n - 1) + fibonacciSeries(n - 2)



print(fibonacciSeries(7))

```