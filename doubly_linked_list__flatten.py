class Node:
    def __init__(self, value):
        self.next = None
        self.prev = None
        self.child = None
        self.value = value


class List:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert(self, value):
        curTail = self.tail
        node = Node(value)

        if curTail is None:
            self.tail = self.head = node
            return True

        node.prev = curTail
        curTail.next = node
        self.tail = node

        return True

    @staticmethod
    def flattenList(list):
        e = list.head
        while e is not None:
            if e.child is not None:
                currTail = list.tail
                list.tail = e.child.tail
                e.child.head.prev = currTail
                currTail.next = e.child.head
            e = e.next

l = List()
l.insert(1)
l.insert(2)
l.insert(3)
l.insert(4)
chl = List()
l.head.next.child = chl
chl.insert(10)
chl.insert(11)

chl2 = List()
l.tail.child = chl2
chl2.insert(20)
chl2.insert(21)


List.flattenList(l)
e = l.head
while e is not None:
    print(e.value)
    e = e.next
