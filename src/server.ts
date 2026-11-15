import express from "express";

const app = express();
const port = 3000;

// 當其他程式送出 GET /health，回傳 JSON 表示服務正在運作。
app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/hello", (req, res) => {
  const name = req.query.name;

  // 驗證實際收到的資料；通過後，TypeScript 也會知道 name 是 string。
  if (typeof name !== "string") {
    res.status(400).json({ message: "請提供 name 字串" });
    return;
  }

  res.json({ message: `Hello, ${name}!` });
});

app.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`);
});
