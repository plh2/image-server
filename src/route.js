const fs = require("fs");
const path = require("path");
const Router = require('koa-router'); //注意：引入的方式
const Mime = require("./utils/mime");
const { DOMAIN } = require("./config");
const mime = new Mime();
const router = new Router();

router.get("/public", async (ctx) => {
  const fileList = fs.readdirSync(path.join(__dirname, '..', "public"));
  ctx.set("Content-Type", "text/html");
  ctx.body = `
    <ul>
      ${fileList.map(file=>`
        <li>
          <a href="/${file}">${file}</a>
        </li>
      `).join('\n')}
    </ul>
  `;
});

router.post("/upload", async(ctx) => {
  let { files } = ctx.request
  const file = files.image;
  const ext = mime.getType(file.type);
  const name = `${Math.random().toString().replace(/0./, "")}.${ext}`;
  const newpath = path.resolve("public", name);
  const topath = fs.createWriteStream(newpath);
  const stream = fs.createReadStream(file.path).pipe(topath);
  await new Promise((r) => stream.on("finish", () => r()));
  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify({
    code: 0,
    data: `${DOMAIN}/${name}`,
  })
});

module.exports = router;