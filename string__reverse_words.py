def reverseWords(str):
    length = len(str)
    tokenReadPos = length - 1
    buff = []
    while tokenReadPos >= 0:
        if str[tokenReadPos] == ' ':
            buff.append(str[tokenReadPos])
            tokenReadPos -= 1
        else:
            wordEnd = tokenReadPos
            while tokenReadPos >= 0 and str[tokenReadPos] != ' ':
                tokenReadPos -= 1
            wordReadPos = tokenReadPos + 1
            while wordReadPos <= wordEnd:
                buff.append(str[wordReadPos])
                wordReadPos += 1
    return ''.join(buff)


str = 'Do or do not, there is no try.'
print(reverseWords(str))