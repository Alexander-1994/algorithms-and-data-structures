const quicksortIterative = require("./quicksortIterative");

/* 
  Для тестирования quicksortIterative я не стал устанавливать библиотечку для тестирования,
  чтобы не инициализировать npm-проект и не ставить доп. пакеты. Просто использовал тестовые данные
  из QuickSortTest.java 
*/

// Пример вызова
console.log(quicksortIterative([])); // []
console.log(quicksortIterative([1])); // [ 1 ]
console.log(quicksortIterative([2, 1])); // [ 1, 2 ]
console.log(quicksortIterative([5, 5, 5, 5])); // [ 5, 5, 5, 5 ]
console.log(quicksortIterative([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(quicksortIterative([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]
console.log(quicksortIterative([3, 1, 2, 3, 1, 2])); // [ 1, 1, 2, 2, 3, 3 ]

/* 
  Чтобы локально проверить этот код, нужно:
  - скопировать репозиторий;
  - установить NodeJS;
  - запустить код из данного файла в редакторе кода. Например, в VS Code есть разширение Code Runner, позволяющее
    запускать код комбинацией клавиш Ctrl+Alt+N и сразу увидеть рез-т во вкладке OUTPUT 
*/
