// Представим данный граф в виде массива

const graph = [
  { from: "A", to: "B", bandwidth: 1500, loss: 0.9 },
  { from: "B", to: "A", bandwidth: 1500, loss: 0.9 },

  { from: "A", to: "C", bandwidth: 2000, loss: 0.1 },
  { from: "C", to: "A", bandwidth: 2000, loss: 0.1 },

  { from: "A", to: "D", bandwidth: 1000, loss: 0.5 },
  { from: "D", to: "A", bandwidth: 1000, loss: 0.5 },

  { from: "B", to: "F", bandwidth: 1500, loss: 0.6 },
  { from: "F", to: "B", bandwidth: 1500, loss: 0.6 },

  { from: "C", to: "F", bandwidth: 500, loss: 0.2 },
  { from: "F", to: "C", bandwidth: 500, loss: 0.2 },

  { from: "C", to: "E", bandwidth: 900, loss: 0.05 },
  { from: "E", to: "C", bandwidth: 900, loss: 0.05 },

  { from: "D", to: "E", bandwidth: 2500, loss: 0.01 },
  { from: "E", to: "D", bandwidth: 2500, loss: 0.01 },

  { from: "E", to: "F", bandwidth: 300, loss: 0.85 },
  { from: "F", to: "E", bandwidth: 300, loss: 0.85 },
];
