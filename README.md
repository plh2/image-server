# image-server

## FREE IMAGE CONTAINER

## DEPLOY

```
git clone https://github.com/plh2/image-server.git
yarn
yarn run buid
```

## upload image(Browser|NodeJS)

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

## review uploaded images

```bash
http://<yoru domain>:5432/public
```

## Demo

http://207.148.118.120:5432
