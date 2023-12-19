const express = require("express");
const router = express.Router();
const axios = require("axios");

const apiKey = "apiKey";
const weatherStackURL = "http://api.weatherstack.com/current";

// Rota para a página inicial
router.get("/", async (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    res.render("error", { error: "Ocorreu um erro ao carregar a página. Tente novamente mais tarde." });
  }
});



module.exports = router;
