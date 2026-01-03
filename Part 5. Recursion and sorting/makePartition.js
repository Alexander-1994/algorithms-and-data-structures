// функция разбиения массива
module.exports = function makePartition(arr, left, right) {
  const mid = Math.floor((left + right) / 2); // индекс серединного элемента
  const pivot = arr[mid]; // серединный элемент

  // Инициализация указателей. i — движется слева направо, ищет элементы ≥ pivot; j — движется справа налево, ищет элементы ≤ pivot.
  let i = left - 1;
  let j = right + 1;

  while (true) {
    // Увеличиваем i, пока arr[i] < pivot
    do {
      i++;
    } while (arr[i] < pivot);

    // Уменьшаем j, пока arr[j] > pivot
    do {
      j--;
    } while (arr[j] > pivot);

    // Если i >= j — указатели встретились. Возвращаем j как границу разбиения.
    if (i >= j) {
      return j;
    }

    // Если указатели не пересеклись, меняем arr[i] и arr[j] местами
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};
