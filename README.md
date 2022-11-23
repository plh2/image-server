# image-server

## FREE IMAGE CONTAINER

## DEPLOY

```
git clone https://github.com/plh2/image-server.git
yarn
yarn run buid
```

## upload image

```
cosnt axios = require('axios');

const url = 'http://<yoru domain>:5432/upload'

axios
  .post(url, formData, {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "207.148.118.120",
  })
```

## review uploaded image

http://<yoru domain>:5432/public

