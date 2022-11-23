const express = require("express");
const path = require("path");
const fs = require("fs");
const formidableMiddleware = require("express-formidable");
const cors = require("cors");
const Mime = require("./utils/mime");

const mime = new Mime();
const app = express();

app.use(cors());
app.use(formidableMiddleware());
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/public", async (req, res) => {
  const fileList = fs.readdirSync(path.join(__dirname, "public"));
  res.setHeader("Content-Type", "text/html");
  res.end(`
    <ul>
      ${fileList.map(file=>`
        <li>
          <a href="/static/${file}">${file}</a>
        </li>
      `).join('\n')}
    </ul>
  `);
});

app.all("/upload", async (req, res) => {
  // console.log(req.files);
  // console.log(req.body);
  const file = req.files.image;
  const ext = mime.getType(file.type);
  const name = `${Math.random().toString().replace(/0./, "")}.${ext}`;
  const newpath = path.resolve("public", name);
  const topath = fs.createWriteStream(newpath);
  const stream = fs.createReadStream(file.path).pipe(topath);
  await new Promise((resolve) => {
    stream.on("finish", async () => {
      resolve();
    });
  });
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      code: 0,
      data: `http://localhost/public/${name}`,
    })
  );
});

module.exports = app;
