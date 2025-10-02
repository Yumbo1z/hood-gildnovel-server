const express = require("express");
const app = express();

const dir = (text) => `${__dirname}/html/${text}.html`;
const link = (input) => `https://gildnovel.com/${input}`;

app.get("/", (_, res) => res.redirect(dir("home")));

app.use((_, res) => res.status(404).redirect("/alert"));

app.listen(process.env.PORT || 80, () => {
  console.log("Server Started");
});

console.log(__dirname);