## 跟你朋友介紹 Git

### Git 的基本概念與操作
用 Git 就像是一種高級的暫存空間跟版本公告欄的概念。檔案們在被收集在暫存空間中，等到準備好了之後可以把想要公告出去的檔案都加到準備公告欄裡面，等到確定之後再把所有內容（檔案們）公告出去。然後你會得到一個亂碼組成的版本號，也可以管理版本。
Git 可以還可以在版本間創造分支，創造分支來分開各個不同的暫存空間，讓大家可以同時工作但不影響到已經被公告出去的東西。等到大家都準備好了還可以合併各個分支，如果有衝突的話還會幫你把衝突標示出來要你去解決。

1. 首先我們要創造一個 Git 空間：使用`git init`把你的資料夾改造成你的暫存空間
2. 把你想放進去版本控制的東西（檔案啊～資料夾啊～）丟進那個資料夾裡面
3. 把你想加入控制的東西加到暫存空間裡面：使用`git add (檔案名稱)`來把檔案丟進去，如果想全部加進去就用`git add .`
4. 當你準備好所有檔案之後，可以把已經加到暫存空間裡的東西 PO 到版本公告欄上：使用`git commit -m "(版本訊息)"`來把東西放上去，GIT 會創造一個看似亂碼的版本號碼並把你的版本訊息也存在上面。
5. 如果你想要建立分支：使用`git branch (分支名稱)`就可以達成，通常一開始的主要分支名稱叫做 master
6. 在版本或分支中間切換：使用`git checkout (版本號或分支名稱)`就可以辦到
 - 如果要合併 5 和 6 可以用`git checkout -b (分支名稱)`來創造新分支並直接切換過去

7. 想要把別的分支合併進目前所在分支：使用`git merge (欲合併進來的分支名稱)`

## 其他功能等你去試過再說吧！
