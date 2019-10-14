require("dotenv").config();
const knex = require("knex");
const ArticlesService = require("./articles-service");

const db = knex({
  client: "pg",
  connection: process.env.DB_URL
});

app.set("db", db);

console.log(ArticlesService.getAllArticles());
