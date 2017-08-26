class Node:
    def __init__(self, value, left=None, right=None):
        self.left = left
        self.right = right
        self.value = value


def preorderTraversal(root):
    if root is None:
        return
    print(root.value)
    preorderTraversal(root.left)
    preorderTraversal(root.right)

def preorderTraversalNotRecursive(root):
    stack = []
    stack.append(root)
    while len(stack) > 0:
        e = stack.pop()
        print(e.value)
        if e.right is not None:
            stack.append(e.right)
        if e.left is not None:
            stack.append(e.left)


t = Node(100, Node(50, Node(25), Node(75)), Node(150, Node(125, Node(110)), Node(175)))

preorderTraversal(t)
preorderTraversalNotRecursive(t)