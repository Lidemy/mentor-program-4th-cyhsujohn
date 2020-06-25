## 交作業流程

1. 使用`git branch status`確認正在使用`master branch` (可使用`git checkout master`切換至`master branch`)
2. 使用`git pull https://github.com/Lidemy/mentor-program-4th.git master`將最新課綱內容拉下來。
2. 使用`git push origin master`將最新課綱內容推到個人專案裡。
3. 使用`git branch wk?`+`git checkout wk?`或是`git branch -b wk?`建立當週做作業使用的 Branch。
4. 確認當週作業內容並完成作業。
5. 使用`git commit -am "wk? completed"`為做完之作業建立 commit。
6. 使用`git push origin wk?`將做完之作業推送到 Github。
7. 使用`Create New Pull`將改動之內容合併到 Master Branch。
8. 等待助教批改作業並刪掉`wk? branch`

----------

助教看完後

----------
1. 使用`git checkout master`切換到 Master Branch。
2. 使用`git pull origin master`將助教批改完並合併完之作業拉到 Local 位置。
3. 使用`git branch -d wk?`將以繳交並批改結束的`wk? branch`刪除。