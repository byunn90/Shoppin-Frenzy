const express = require("express");
const path = require("path");
const expressHandlebars = require("express-handlebars");
const mainRoutes = require("./controllers/main");
const apiRoutes = require("./controllers/api/examples");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hbs = expressHandlebars.create({});
app.engine("handlebars", hbs.engine);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));

// Use the routes
app.use("/", mainRoutes);
app.use("/api", apiRoutes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
});
