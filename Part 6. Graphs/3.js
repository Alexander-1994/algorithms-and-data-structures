// Задание 3: Выполните реализацию функции поиска наибольшей общей подпоследовательности методом динамического программирования.

function getLongestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;

    // Создаём двумерный массив dp размером (m+1) x (n+1)
  const dp = Array(m + 1)
      .fill()
      .map(() => Array(n + 1).fill(0));

  // Заполняем таблицу
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (str1[i - 1] === str2[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1] + 1;
          } else {
              dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
          }
      }
  }

  // Восстанавливаем LCS
  let lcs = "";
  let i = m, j = n;
  while (i > 0 && j > 0) {
      if (str1[i - 1] === str2[j - 1]) {
          lcs = str1[i - 1] + lcs;
          i--;
          j--;
      } else if (dp[i - 1][j] > dp[i][j - 1]) {
          i--;
      } else {
          j--;
      }
  }

  return lcs;
}

console.log(getLongestCommonSubsequence("ABCDGH", "AEDFHR")); /* Вывод в консоли: ADH */
console.log(getLongestCommonSubsequence("AGGTAB", "GXTXAYB")); /* Вывод в консоли: GTAB */