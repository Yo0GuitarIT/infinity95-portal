# Infinity95 API

使用 Express + TypeScript 建立的最小後端服務，提供 API 給其他程式呼叫。

## 啟動開發服務

需要 Node.js 22.12.0 以上與 pnpm。

```sh
pnpm install
pnpm dev
```

服務位址為 `http://localhost:3000`。修改 `src/server.ts` 並存檔後，開發服務會自動重啟；按 `Ctrl+C` 停止服務。

## 呼叫第一個 API

在另一個終端機執行：

```sh
curl -i http://localhost:3000/health
```

HTTP 狀態碼為 `200`，Content-Type 為 `application/json`，回應內容是：

```json
{ "status": "ok" }
```

也可以用瀏覽器開啟 `http://localhost:3000/health` 查看 JSON。這個端點只確認 HTTP 服務能回應，不檢查資料庫或外部服務。尚未定義的路徑（例如 `/`）會由 Express 回傳 `404`。

## 程式怎麼運作

所有應用程式碼都在 `src/server.ts`：

1. `import express`：載入處理 HTTP 請求的框架。
2. `express()`：建立應用程式。
3. `app.get("/health", ...)`：定義路由，處理 GET 方法與 `/health` 路徑的請求。
4. `_req` 是收到的請求，目前沒有使用；`res` 是用來回傳結果的回應物件。
5. `res.json(...)`：把資料轉成 JSON 回傳，預設狀態碼為 200。
6. `app.listen(3000, ...)`：啟動服務，在 3000 埠等待請求。

TypeScript 協助檢查程式中的型別；HTTP 是程式交換請求與回應的協定，JSON 是這個 API 使用的資料格式。

目前固定使用 3000 埠。如果出現 `EADDRINUSE`，表示該埠已被占用，請先停止占用的服務，或修改 `src/server.ts` 的 `port`。

## 指令

| 指令          | 用途                                         |
| ------------- | -------------------------------------------- |
| `pnpm dev`    | 開發模式，修改程式後自動重啟                 |
| `pnpm check`  | 檢查 TypeScript 型別，不產生檔案             |
| `pnpm build`  | 將 TypeScript 編譯成 `dist/` 裡的 JavaScript |
| `pnpm start`  | 執行編譯後的服務，需先執行 build             |
| `pnpm format` | 格式化原始碼與文件                           |

執行編譯後的版本：

```sh
pnpm build
pnpm start
```

開發與編譯後的服務使用同一個埠，請先停止開發服務再執行 `pnpm start`。

## 學習文件

- [Express 官方入門範例](https://expressjs.com/en/starter/hello-world/)
- [Express 路由](https://expressjs.com/en/guide/routing.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
