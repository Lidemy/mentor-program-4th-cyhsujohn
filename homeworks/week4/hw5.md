## 請以自己的話解釋 API 是什麼
API是一個為平台間及不同來源間進行溝通或資料交換所使用的通用橋樑，資料擁有者以約定好的格式處理資料並製作 API 文件以供外部使用者取得公開資訊，資料使用者透過 API 文件及約定好的格式取得資料並加以使用。 API 讓你我之間沒有距離。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
1. 410 Gone: 這個網域很有可能已經永久無法從該服務端被取得了。（如果不確定是暫時無法取得還是永久無法取得的話，建議使用 404 Not Found 為狀態碼。）會看到這個狀態碼是因為在做功課第四題的時候串接方式似乎有錯，所以去研究了一下這個部分。
2. 201 Created: 使用者送出的請求已經成功而且資料已經被建立在資料庫裡面了。通常 201 會在送出 ```POST``` 或是某些```PUT```之後會回傳。
3. 429 Too Many Requests: 此用者在設定的時間段內送出太多請求時，伺服器會傳回此代碼。

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
Base URL: https://tasty.restaurants.com
| 說明     | Method | 路徑       | 請求參數                   | 範例             |
|--------|--------|------------|----------------------|----------------|
| 查詢所有餐廳 | GET    | /stores     | 無           | /stores |
| 查詢特定餐廳 | GET    | /stores/:id | 無                    | /stores/5      |
| 新增餐廳   | POST   | /stores     | name: 餐廳名稱 | 無              |
| 刪除餐廳   | DELETE   | /stores/:id     | 無 | /stores/10              |
| 更改餐廳資訊   | PATCH   | /patch/:id     | name: 餐廳名稱 | 無              |