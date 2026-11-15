import express from "express";

const app = express();
const port = 3000;

// 當其他程式送出 GET /health，回傳 JSON 表示服務正在運作。
app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`);
});
