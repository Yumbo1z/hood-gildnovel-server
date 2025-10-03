const express = require("express");
const app = express();

const dir = (text) => `${__dirname}/html/${text}.html`;
const link = (input) =>
  `https://hood-gildnovel-server-production.up.railway.app/${input}`;

app.get("/ads.txt", (_, res) => res.sendFile(`${__dirname}/public/ads.txt`));

app.get("/modpack.zip", (_, res) => res.sendFile(`${__dirname}/public/modpack.zip`));


app.get("/", async (_, res) => res.sendFile(dir("home")));

app.use((_, res) => res.status(404).redirect("/alert"));

app.listen(process.env.PORT || 80, () => {
  console.log("Server Started");
});

console.log(__dirname);
