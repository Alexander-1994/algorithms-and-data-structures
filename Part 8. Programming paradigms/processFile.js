const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

// Преобразуем fs.readFile в промис для удобной работы
const readFile = promisify(fs.readFile);

async function processFile(filePath) {
  try {
    // Читаем файл
    const fileData = await readFile(filePath, 'utf8');
    const lines = fileData.trim().split('\n');

    // Обрабатываем каждую строку: парсим имя и номер, фильтруем строки без номера
    const processedLines = lines
      .map(line => {
        const [name, number] = line.split(':');

        return { name, number };
      })
      // Оставляем только строки с номером
      .filter(item => item.number && !isNaN(item.number)); 

    // Приводим имена к нужному формату: нижний регистр + первая буква заглавная
    const formattedNames = processedLines.map(item => {
      const formattedName = item.name.toLowerCase().charAt(0).toUpperCase() + item.name.slice(1).toLowerCase();

      return { name: formattedName, number: parseInt(item.number) };
    });

    // Группируем имена по номерам с помощью reduce
    const grouped = formattedNames.reduce((acc, { name, number }) => {
      if (!acc[number]) {
        acc[number] = [];
      }

      acc[number].push(name);

      return acc;
    }, {});

    // Форматируем результат в нужный вид [номер:[имена], ...]
    const result = Object.keys(grouped).map(number => {
      return `${number}:${JSON.stringify(grouped[number])}`;
    }).join(', ');

    console.log(`Результат: [${result}]`);

    // возвращаем объект с группировкой для дальнейшего использования
    return grouped;

  } catch (error) {
    console.error('Ошибка при обработке файла:', error);
  }
}

// Вызываем функцию с путём к файлу
processFile(path.resolve(__dirname , './example.txt'));
/* 
  Вывод в консоли:
  Результат: [1:["Гена"], 3:["Петя","Клава"], 5:["Вася","Аня"], 15:["Евкакий"]]
*/