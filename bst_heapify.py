class Node:
    def __init__(self, value, left=None, right=None):
        self.left = left
        self.right = right
        self.value = value

def preorderTraversal(root, callback):
    if root is None:
        return
    callback(root)
    preorderTraversal(root.left, callback)
    preorderTraversal(root.right, callback)

def heapifyBinaryTree(nodes):
    for i in range(len(nodes)):
        leftIndex = 2 * i + 1
        rightIndex = leftIndex + 1
        if leftIndex < len(nodes):
            nodes[i].left = nodes[leftIndex]
        else:
            nodes[i].left = None
        if rightIndex < len(nodes):
            nodes[i].right = nodes[rightIndex]
        else:
            nodes[i].right = None

    if len(nodes) > 0:
        return nodes[0]

t = Node(
    100,
    Node(50, Node(25), Node(75)),
    Node(
        150,
        Node(125, Node(110)),
        Node(175)
    )
)

nodes = []
preorderTraversal(t, lambda node: nodes.append(node))
nodes.sort(key=lambda n: n.value)

root = heapifyBinaryTree(nodes)

preorderTraversal(root, lambda n: print(n.value))
