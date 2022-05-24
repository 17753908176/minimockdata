const express = require("express");
const app = express();
const port = 3000;
const homeLocationA = require("./data/theme.json");
const banner = require("./data/banner.json");
const category = require("./data/category.json");

//顶部主题
app.get("/getTheme", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");

  res.send({
    code: 200,
    data: homeLocationA,
  });
});

//获取顶部banner
app.get("/getBanner", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");

  res.send({
    code: 200,
    data: banner,
  });
});

//获取首页分类
app.get("/getCategory", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");

  res.send({
    code: 200,
    data: category,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
