class ListElement:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.head = self.tail = self
        self.length = 1

    def insertInFront(self, value):
        newElem = ListElement(value)
        newElem.next = self.head
        self.head = newElem
        self.length = self.length + 1
        return newElem

    def find(self, data):
        elem = self.head
        while elem.value != data and elem is not None:
            elem = elem.next
        return elem

    def deleteElement(self, deleteMe):
        if self.head is None or deleteMe is None:
            return False

        if deleteMe == self.head:
            self.head = deleteMe.next
            self.length = self.length - 1
            return True
        
        elem = self.head
        while elem is not None:
            if elem.next == deleteMe:
                elem.next = deleteMe.next
                self.length = self.length - 1
                return True
            elem = elem.next

        return False