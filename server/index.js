const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001; // 클라이언트가 3000 포트를 사용한다면, 서버는 다른 포트를 사용해야 함

// 미들웨어 설정
app.use(cors()); // CORS 미들웨어 추가 (개발 시 유용)
app.use(express.json()); // JSON 파싱을 위한 미들웨어

// 라우터
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/data", (req, res) => {
  const data = req.body;
  // 데이터를 처리하고 응답을 보냄
  res.json({ message: "Data received", data });
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
