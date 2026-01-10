# Graph

- network of nodes

## Parts of graphs

- Node ( vertex ) and multiple nodes are called vertixes
- edges (connection between any two nodes is called an edge )

## Types of graphs

### Based on edges

- directional graphs ( directed or undirected graphs ->, undirected or bi-directional graphs ->
  <- )
- weighited graphs ( can be positive or nagative ) and unweighited graphs
- connected graphs and disconnected graph

- Adjacency List

list<int> [V]

```cpp
// (STL) Standard Library
#include <list> // Doubly Linked list internely implemented in cpp stl
#include <vector>
#include <iostream>
using namespace std;

// list have a front and back caus its a doubly linked list soo you can go from front node or back node bidirectional basically

// Operation available in list in cpp ( Doubly Linked List )

// - push back push front
// - pop back pop front
// - check front check back
// - check size

class Graph {
    int V; // Node , Vertex
    list<int> * l; // dynamic list of integers

public:
    Graph(int V){
        this -> V = V;
        l = new list<int> [V];
    }

    void addEdge(int u, int v){
        l[u].push_back(v);
        l[v].push_back(u);
    }

    void printAdjList(){
        for (int i = 0; i < V; i++){
            cout << i << " : ";
            for (int neigh: l[i]){
                cout << neigh << " ";
            }
            cout << endl;
        }
    }


};

int main(){

    Graph g1(5);


    g1.addEdge(0, 1);
    g1.addEdge(1, 2);
    g1.addEdge(1, 3);
    g1.addEdge(2, 3);
    g1.addEdge(2, 4);

    g1.printAdjList();

    return 0;
}
```

```py
class Graph:
    def __init__(self):
        self.graph = {}

    def addEdge(self, edge1, edge2):
        # Ensure node edge1 exists in the adjacency list
        if edge1 not in self.graph:
            self.graph[edge1] = []
        # Ensure node edge2 exists in the adjacency list
        if edge2 not in self.graph:
            self.graph[edge2] = []
        # Add edge2 to edge1's adjacency list if not already present
        if edge2 not in self.graph[edge1]:
            self.graph[edge1].append(edge2)
        # Add edge1 to edge2's adjacency list if not already present
        if edge1 not in self.graph[edge2]:
            self.graph[edge2].append(edge1)

    def printAdjList(self):
        print(self.graph)
        for node in self.graph:
            print(node, ":", self.graph[node])

g1 = Graph()
g1.addEdge(0, 1)
g1.addEdge(1, 2)
g1.addEdge(1, 3)
g1.addEdge(2, 3)
g1.addEdge(2, 4)
g1.printAdjList()

```
