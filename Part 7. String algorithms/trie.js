// Класс узла префиксного дерева
class TrieNode {
  constructor() {
      // Словарь для хранения дочерних узлов
      // Ключ — символ, значение — экземпляр TrieNode
      this.children = {};
      
      // Флаг, указывающий, является ли этот узел концом какого‑либо слова
      this.isEndOfWord = false;
  }
}

// Основной класс префиксного дерева
class Trie {
  constructor() {
      // Создаём корневой узел (пустой, без символа)
      this.root = new TrieNode();
  }

  /**
   * Вставка
   * 
   * Добавляет слово в префиксное дерево
   * @param {string} word слово для вставки
   */
  insert(word) {
      // Защищаемся от пустых строк и undefined
      if (!word) return;

      // Начинаем с корневого узла
      let node = this.root;

      // Проходим по каждому символу слова
      for (const char of word) {
          // Если для текущего символа ещё нет узла — создаём его
          if (!node.children[char]) {
              node.children[char] = new TrieNode();
          }
          // Переходим к узлу, соответствующему текущему символу
          node = node.children[char];
      }

      // Помечаем последний узел как конец слова
      node.isEndOfWord = true;
  }

  /**
   * Поисĸ
   * 
   * Проверяет, существует ли полное слово в дереве
   * @param {string} word искомое слово
   * @returns {boolean} true, если слово найдено, иначе false
   */
  search(word) {
      // Защищаемся от пустых строк и undefined
      if (!word) return false;

      // Начинаем с корневого узла
      let node = this.root;

      // Проходим по каждому символу слова
      for (const char of word) {
          // Если символ не найден в текущих детях — слово отсутствует
          if (!node.children[char]) {
              return false;
          }
          // Переходим к следующему узлу
          node = node.children[char];
      }

      // Слово существует, только если текущий узел помечен как конец слова
      return node.isEndOfWord;
  }

  /**
   * Поисĸ по префиĸсу
   * 
   * Находит все слова, начинающиеся с заданного префикса
   * @param {string} prefix искомый префикс
   * @returns {string[]} массив слов, начинающихся с префикса
   */
  startsWith(prefix) {
      // Массив для хранения найденных слов
      const results = [];

      // Начинаем с корневого узла
      let node = this.root;

      // Проходим по символам префикса, чтобы найти соответствующий узел
      for (const char of prefix) {
          // Если символ не найден — префикс отсутствует в дереве
          if (!node.children[char]) {
              return results; // возвращаем пустой массив
          }
          // Переходим к следующему узлу
          node = node.children[char];
      }

      // После нахождения узла префикса собираем все слова в его поддереве
      this._collectWords(node, prefix, results);

      return results;
  }

  /**
   * Вспомогательный метод: рекурсивно собирает все слова из поддерева
   * @param {TrieNode} node текущий узел
   * @param {string} currentWord текущее сформированное слово
   * @param {string[]} results массив для накопления результатов
   */
  _collectWords(node, currentWord, results) {
      // Если текущий узел — конец слова, добавляем его в результаты
      if (node.isEndOfWord) {
          results.push(currentWord);
      }

      // Рекурсивно обходим всех дочерних узлов
      for (const [char, childNode] of Object.entries(node.children)) {
          // Продолжаем строить слово, добавляя текущий символ
          this._collectWords(childNode, currentWord + char, results);
      }
  }
}

// Пример использования
const trie = new Trie();

// Добавляем слова в дерево
trie.insert("apple");
trie.insert("app");
trie.insert("application");
trie.insert("apply");
trie.insert("banana");

// Проверяем наличие полных слов
console.log(trie.search("app"));        // true
console.log(trie.search("apples"));     // false

// Ищем слова по префиксу
console.log(trie.startsWith("app"));     // ["app", "apple", "application", "apply"]
console.log(trie.startsWith("ban"));     // ["banana"]
console.log(trie.startsWith("xyz"));     // []
