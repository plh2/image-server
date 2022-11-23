const app = require("./route");

const port = 5432;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
