class Node:
    def __init__(self, value, left=None, right=None):
        self.left = left
        self.right = right
        self.value = value


# def findNode(tree, num):
#     while tree is not None:
#         if tree.value < num:
#             tree = tree.right
#         elif tree.value > num:
#             tree = tree.left
#         else:
#             break
#     return tree

def findNode(tree, num):
    if tree is None:
        return None
    if tree.value > num:
        return findNode(tree.left, num)
    elif tree.value < num:
        return findNode(tree.right, num)
    return tree


t = Node(5, Node(3, Node(1), Node(4)), Node(10, Node(7), Node(12)))

print(findNode(t, 10).value)
