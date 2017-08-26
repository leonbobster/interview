def reverseString(str, start=0, end=None):
    if end == None: 
        end = len(str) - 1
    while start < end:
        str[start], str[end] = str[end], str[start]
        start += 1
        end -= 1

def reverseWords(str):
    start = 0
    end = 0
    length = len(str)
    while end < length:
        if str[end] != ' ':
            start = end
            while end < length and str[end] != ' ': 
                end += 1
            end -= 1
            reverseString(str, start, end)
        end += 1

str = 'Do or do not, there is no try.'
str = list(str)
reverseString(str)
reverseWords(str)
print(''.join(str))
