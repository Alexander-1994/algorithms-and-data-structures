// Стек для хранения границ подмассивов [left, right]. Стек "имитирует" рекурсивные вызовы.
// Тут я переиспользую написанный мной экземпляр класса из предыдущей домашней работы.
const stack = require("../Part 4. Data structures/stack");

const makePartition = require("./makePartition");

// функция быстрой сортировки массива (итеративно)
module.exports = function quicksortIterative(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  stack.push(0);
  stack.push(arr.length - 1);

  while (stack.size() > 0) {
    const right = stack.pop();
    const left = stack.pop();

    if (left < right) {
      const pivotIndex = makePartition(arr, left, right);

      if (pivotIndex > left) {
        stack.push(left);
        stack.push(pivotIndex);
      }

      if (pivotIndex + 1 < right) {
        stack.push(pivotIndex + 1);
        stack.push(right);
      }
    }
  }

  return arr;
};
