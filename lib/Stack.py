class Element:
    def __init__(self, head, data):
        self.next = head
        self.data = data

class Stack:
    def __init__(self):
        self.head = None
        self.tail = None

    def push(self, data):
        element = Element(self.head, data)
        self.head = element

    def pop(self):
        if self.head is None:
            return None

        data = self.head.data
        self.head = self.head.next

        return data

    def delete(self, elem):
        # remove first element
        if self.head == elem:
            self.head = self.head.next
            if self.head is None:
                self.tail = None
            return True
        # remove central element
        curPos = self.head
        while curPos is not None:
            if curPos.next == elem:
                curPos.next = elem.next
                # if last element
                if curPos.next is None:
                    self.tail = curPos
                return True
            curPos = curPos.next
        return False

    def insertAfter(self, elem, data):
        newElem = Element(None, data)
        if elem is None:
            newElem.next = self.head
            self.head = newElem
            if self.tail is None:
                self.tail = newElem
            return True
        curPos = self.head
        while curPos is not None:
            if curPos == elem:
                newElem.next = curPos.next
                curPos.next = newElem
                # insert to the end
                if newElem.next is None:
                    self.tail = newElem
                return True
            curPos = curPos.next
        return False
