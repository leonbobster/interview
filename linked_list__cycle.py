class Element:
    def __init__(self, value):
        self.value = value
        self.next = None


class List:
    def __init__(self):
        self.head = self.tail = None

    def insert(self, value):
        e = Element(value)
        curTail = self.tail
        if curTail is None:
            self.head = self.tail = e
        else:
            curTail.next = e
            self.tail = e

l = List()
l.insert(1)
l.insert(2)
l.head.next.next = l.head

elements = []
e = l.head
while e is not None:
    if e in elements:
        print ('cyclic')
        break
    print(e.value)
    elements.append(e)
    e = e.next
