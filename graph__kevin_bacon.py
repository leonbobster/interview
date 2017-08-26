from collections import deque

class ActorGraphNode:
    def __init__(self, name):
        self.name = name
        self.linkedActors = set()
        self.baconNumber = -1

    def linkCostar(self, costar):
        costar.linkedActors.add(self)
        self.linkedActors.add(costar)

    def __str__(self):
        return self.name


def setBaconNumber(baconNode):
    baconNode.baconNumber = 0
    queue = deque()
    queue.append(baconNode)
    while len(queue) > 0:
        current = queue.popleft()
        for n in current.linkedActors:
            if n.baconNumber == -1:
                n.baconNumber = current.baconNumber + 1
                queue.append(n)

def printBaconQueue(node):
    q = deque()
    q.append(node)
    while len(q) > 0:
        curr = q.popleft()
        print(curr.name)
        for n in curr.linkedActors:
            if n.baconNumber <= curr.baconNumber:
                q.append(n)
                break

foo = ActorGraphNode('foo')
bar = ActorGraphNode('bar')
baz = ActorGraphNode('baz')
bar.linkCostar(baz)
bat = ActorGraphNode('bat')
baz.linkCostar(bat)
foo.linkCostar(bar)

setBaconNumber(foo)

printBaconQueue(bat)
