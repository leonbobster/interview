from functools import reduce

intervals = [[1, 3], [2, 6], [2, 18], [5, 6], [3, 21], [22, 46], [46, 47]]

def merger(x, b):
    if len(x) == 0:
        x.append(b)
    else:
        a = x.pop()
        if a[0] == b[0]:
            x.append([a[0], max(a[1], b[1])])
        elif a[1] >= b[0] and a[1] <= b[1]:
            x.append([a[0], b[1]])
        elif a[1] >= b[1]:
            x.append([a[0], a[1]])
        else:
            x.append(a)
            x.append(b)
    return x

print(reduce(merger, intervals, []))


