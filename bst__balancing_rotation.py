class Node:
    def __init__(self, value, left=None, right=None):
        self.left = left
        self.right = right
        self.value = value


root = Node(
    6,
    Node(
        4, 
        Node(2, Node(1), Node(3)),
        Node(5)
    ),
    Node(7)
)

def rotateRight(oldRoot):
    newRoot = oldRoot.left
    oldRoot.left = newRoot.right
    newRoot.right = oldRoot
    return newRoot

newRoot = rotateRight(root)