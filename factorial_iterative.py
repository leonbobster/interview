def factorial(n):
    val = 1
    i = 1
    for i in range(n, 1, -1):
        val *= i
    return val


print(factorial(4))