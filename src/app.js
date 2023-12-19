const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes/index");

const app = express();
const PORT = 3000;

// Inicia o servidor na porta 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Configuração do Handlebars
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs.engine({ defaultLayout: "layout" }));
app.set("view engine", "handlebars");

// Body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas
app.use("/", routes);