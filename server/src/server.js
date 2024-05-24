require("dotenv").config();
const express = require("express");
const userRouters = require("./routers/users")

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// Cấu hình để Express xử lý dữ liệu từ các yêu cầu HTTP
// Phân tích dữ liệu trong định dạng JSON
app.use(express.json());

app.use("/",userRouters);

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
