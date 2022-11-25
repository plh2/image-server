const axios = require("axios");
const FormData = require("form-data");
const { createCanvas } = require("canvas");
const { DOMAIN } = require("./config");

const canvas = createCanvas(100, 200);

// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

let formData = new FormData();
const buffer = canvas.toBuffer('image/png')
formData.append("image", buffer, 'image.png');

// const url = 'http://207.148.118.120:5432/upload'
const url = `${DOMAIN}/upload`;

axios({
    url,
    method: 'post',
    data: formData,
    headers: {
      "Content-Type": `multipart/form-data;`,
    }
  },
  )
  .then((res) => {
    console.log("res", res.data);
  })
  .catch((e) => {
    console.log("err", e.message);
  });
