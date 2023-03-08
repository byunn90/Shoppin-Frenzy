const express = require("express");
const expressHandlebars = require("express-handlebars");
// const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hbs = expressHandlebars.create({});
app.engine("handlebars", hbs.engine);

// sync sequalize models to the database, then turn on the sever
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
