const Koa = require("koa");
const path = require("path");
const cors = require("@koa/cors");
const logger = require('koa-logger');
const kosStatic = require('koa-static');
const formidable = require('koa2-formidable')
const router = require("./route");

const app = new Koa();
const port = 5432;

app.use(formidable())
app.use(cors());
app.use(logger());
app.use(kosStatic(path.join(__dirname, "..", "public"), {
  gzip: true,
  maxage: 365 * 24 * 3600 * 1000, // 1 year
}));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port);
