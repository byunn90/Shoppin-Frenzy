const express = require("express");
const path = require("path");
const routes = require("./controllers/api");
const homeRoutes = require("./controllers/home-route");
const expressHandlebars = require("express-handlebars");
// Sets up the Express app
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
app.use("/", homeRoutes);
// Set Handlebars as the default template engine.
const hbs = expressHandlebars.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));

// Use the routes
// app.use("/", examples);
// app.use("/api", apiRoutes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
});
