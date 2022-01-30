# 短網址產生器

![Index page about Restaurant List](./public/1.jpg)

## 介紹

- 提供使用者轉化網址為短網址且能連回原本網址功能

### 功能

- 使用者在表單輸入網址後，可以取得自動產生的短網址
- 在伺服器啟動期間，使用者可以透過輸入短網址，連回原本的網站


## 開始使用

1. 將專案 clone 到本地

   ```bash
   git clone https://github.com/Eli-WL/URL_Shorten.git
   ```

2. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install
   ```

3. 確認express-handlebars 為5.3.4以下的版本，若不是輸入以下指令安裝

   ```bash
   npm i express-handkebars @ 5.3.4
   ```

4. 確認環境與下列開發環境相同後，輸入：

   ```bash
   npm run dev
   ```

7. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址

   ```bash
   Listening on http://localhost:3000
   ```

8. 停止server運作

   ```bash
   ctrl + c
   ```

## 開發工具

- Node.js 14.16.0
- Express 4.17.2
- Express-Handlebars 5.3.4
- mongoose 6.1.7
- body-parser 1.19.1


## Contributor
Eli Lin