const express = require('express');
const bodyParser = require("body-parser");
const sequelize = require('./db');
const router = require("./router");

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', router);

const sync = async () => await sequelize.sync();
sync();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})


