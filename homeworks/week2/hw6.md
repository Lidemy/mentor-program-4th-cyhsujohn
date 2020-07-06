``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 設定一個 function 名為 isValid 且有一個參數名為 arr
2. 設定變數 i 為 0，設定當 i 小於陣列 arr 之項目數量時滿足條件並進入迴圈，迴圈結束後執行 i++ (變數 i 加 1)
3. 設定進入迴圈後之動作為：若陣列 arr 的第 i 項小於或等於 0 時，回傳字串 invalid 並結束此 function
4. 設定跑完上述迴圈後，執行第二個迴圈，設定變數 i 為 2，設定當 i 小於陣列 arr 之項目數量時滿足條件並進入迴圈，迴圈結束後執行 i++ (變數 i 加 1)
5. 設定進入迴圈後之動作為：若陣列 arr 的第 i 項不等於陣列 arr 的第 i-1 項與第 i-2 項之和時，回傳字串 invalid 並結束此 function
6. 設定若跑完上述兩個迴圈都沒有回傳字串的話，回傳字串 valid
7. 執行呼叫isValid function，設定參數為 [3, 5, 8, 13, 22, 35]
8. 進入 function 參數 arr = [3, 5, 8, 13, 22, 35]
9. 執行第一個迴圈，宣告 i = 0 ，arr.length = 6，所以 i < arr.length 成立，進入迴圈。
10. 第一圈 arr[0] = 3 > 0 所以不滿足條件，第一圈結束並執行 i++ 使 i = 1
11. i = 1 < arr.length = 6 滿足條件，進入迴圈
10. 第二圈 arr[1] = 5 > 0 所以不滿足條件，第二圈結束並執行 i++ 使 i = 2
11. i = 2 < arr.length = 6 滿足條件，進入迴圈
12. 第三圈 arr[2] = 8 > 0 所以不滿足條件，第三圈結束並執行 i++ 使 i = 3
11. i = 3 < arr.length = 6 滿足條件，進入迴圈
12. 第四圈 arr[3] = 13 > 0 所以不滿足條件，第四圈結束並執行 i++ 使 i = 4
11. i = 4 < arr.length = 6 滿足條件，進入迴圈
12. 第五圈 arr[4] = 22 > 0 所以不滿足條件，第五圈結束並執行 i++ 使 i = 5
11. i = 5 < arr.length = 6 滿足條件，進入迴圈
12. 第六圈 arr[5] = 35 > 0 所以不滿足條件，第六圈結束並執行 i++ 使 i = 6
11. i = 6 = arr.length = 6 不滿足應小於 6 之條件，因此第一個迴圈結束
9. 執行第二個迴圈，宣告 i = 2 ，arr.length = 6，所以 i < arr.length 成立，進入迴圈。
10. 第一圈 arr[2] = 8 完全等於 arr[1] + arr[0] = 5 + 3 = 8 所以不滿足條件，第一圈結束並執行 i++ 使 i = 3
11. i = 3 < arr.length = 6 滿足條件，進入迴圈
10. 第二圈 arr[3] = 13 完全等於 arr[2] + arr[1] = 8 + 5 = 13 所以不滿足條件，第二圈結束並執行 i++ 使 i = 4
11. i = 4 < arr.length = 6 滿足條件，進入迴圈
10. 第三圈 arr[4] = 22 非完全等於 arr[3] + arr[2] = 13 + 8 = 21 ，滿足條件，回傳字串 invalid 並結束 function