// Представим данный граф в виде узлов

class Node {
  constructor(name) {
    this.name = name;
    this.edges = [];
  }

  addEdge(node, bandwidth, loss) {
    this.edges.push({ node, bandwidth, loss });
  }
}

class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(name) {
    if (!this.nodes[name]) {
      this.nodes[name] = new Node(name);
    }

    return this.nodes[name];
  }

  addEdge(from, to, bandwidth, loss) {
    const nodeA = this.addNode(from);
    const nodeB = this.addNode(to);

    /* т.к. граф судя по рисунку ненаправленный -> связи м/у узлами двусторонние */
    nodeA.addEdge(nodeB, bandwidth, loss);
    nodeB.addEdge(nodeA, bandwidth, loss);
  }
}

const graph = new Graph();

graph.addEdge("A", "B", 1500, 0.9);
graph.addEdge("A", "C", 2000, 0.1);
graph.addEdge("A", "D", 1000, 0.5);

graph.addEdge("B", "F", 1000, 0.5);

graph.addEdge("B", "F", 1500, 0.6);

graph.addEdge("C", "F", 500, 0.2);
graph.addEdge("C", "E", 900, 0.05);

graph.addEdge("D", "E", 2500, 0.01);

graph.addEdge("E", "F", 300, 0.85);

console.log(graph);
