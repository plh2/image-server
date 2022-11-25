# image-server

## 图床

## 部署

```bash
git clone https://github.com/plh2/image-server.git
yarn
yarn run start
```

## 上传图片(浏览器|NodeJS)

```js
cosnt axios = require('axios');
let formData = new FormData();
const url = 'http://<yoru domain>:5432/upload'

formData.append("image", blob, "xxx.png");
const res = await axios.post(url, formData, {
  "Content-Type": `multipart/form-data;`,
});
console.log(res.data.data) // image url;
```

## 查看线上图片

```bash
http://<yoru domain>:5432/public
```

## Demo

[index.html](http://207.148.118.120:5432/index.html)

## 国际化

[English](https://github.com/plh2/image-server) [简体中文](https://github.com/plh2/image-server/blob/main/zh-CN.md)
