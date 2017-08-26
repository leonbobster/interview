def binarySearch(arr, val, left=0, right=None):
    if right == None:
        right = len(arr) - 1
    if right - left < 0:
        return None

    center = round((right - left) / 2) + left
    
    if arr[center] > val:
        return binarySearch(arr, val, left, center - 1)
    elif arr[center] < val:
        return binarySearch(arr, val, center + 1, right)
    return center

def iterBinarySearch(arr, val):
    left = 0
    right = len(arr) - 1
    while right >= left:
        center = round((right - left) / 2) + left
        if arr[center] == val:
            return center
        elif arr[center] > val:
            right = center - 1
        elif arr[center] < val:
            left = center + 1
    return None

print(iterBinarySearch([1, 2], 2))
print(iterBinarySearch([1, 2, 3], 2))
print(iterBinarySearch([1, 2, 3], 1))
print(iterBinarySearch([1, 2], 1))
print(iterBinarySearch([1, 2, 3], 3))
print(iterBinarySearch([], 3))
print(iterBinarySearch([1], 3))
print(iterBinarySearch([1], 1))
print(iterBinarySearch([-1, 2, 3], -1))