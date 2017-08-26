def toList(str):
    chars = []
    for c in str:
        chars.append(c)
    return chars

def removeDuplicates(list):
    i = j = 1
    while i < len(list):
        if list[i] != list[i - 1]:
            list[j] = list[i]
            j += 1
        i += 1
    return ''.join(list[0:j])

list = toList('ccaafooaa')
list.sort()
print(removeDuplicates(list))