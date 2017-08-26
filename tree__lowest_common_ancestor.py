class Node:
    def __init__(self, value, left=None, right=None):
        self.left = left
        self.right = right
        self.value = value

def lowestCommonAncestor(root, a, b):
    while root is not None:
        if root.value > a and root.value > b:
            root = root.left
        elif root.value < a and root.value < b:
            root = root.right
        else:
            return root

t = Node(20, Node(8, Node(4), Node(12, Node(10), Node(14))), Node(22))

print(lowestCommonAncestor(t, 4, 14).value)