from lib.ListElement import ListElement
from collections import deque

l = ListElement(1)
l.insertInFront(2)
l.insertInFront(3)
l.insertInFront(4)
l.insertInFront(5)


def findMToLastElement(head, m):
    if head is None:
        return False

    i = 0
    current = head
    while i < m:
        if current.next is None:
            return False
        i = i + 1
        current = current.next

    mBehind = head
    while current.next is not None:
        mBehind = mBehind.next
        current = current.next

    print(mBehind.value)


findMToLastElement(l.head, 2)
