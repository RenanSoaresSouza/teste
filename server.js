const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.send({ msg: "ola seja bem vindo a minha API" });
});

app.listen(3000, () => {
  console.log("BackEnd iniciado em http://localhost:3000");
});
