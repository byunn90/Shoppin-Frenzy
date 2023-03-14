const express = require("express");
const path = require("path");
const routes = require("./controllers/api");
const homeRoutes = require("./controllers/home-route");
const expressHandlebars = require("express-handlebars");
const session = require("express-session");
const searchRoutes = require("./controllers/searchRoutes");

const SequelizeStore = require("connect-session-sequelize")(session.Store);
// Sets up the Express app
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Set Handlebars as the default template engine.
const hbs = expressHandlebars.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

console.log(app.get("views"));
app.use(express.static(path.join(__dirname, "public")));

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use("/api", routes);
app.use("/search", searchRoutes);
app.use("/", homeRoutes);
// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
});
