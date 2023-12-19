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


// Rota para buscar o clima
router.post("/weather-details", async (req, res) => {
  try {
    const city = req.body.city;
    const apiUrl = `${weatherStackURL}?access_key=${apiKey}&query=${city}`;

    const response = await axios.get(apiUrl);
    const weatherData = response.data;

    res.render("details", { weatherData, city });
  } catch (error) {
    res.render("error", { error: "Ocorreu um erro ao obter informações meteorológicas. Tente novamente mais tarde." });
  }
});


module.exports = router;
