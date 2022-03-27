const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/build`));

app.listen(3000, () => {
    console.log('server is up and running on port 3000');
});