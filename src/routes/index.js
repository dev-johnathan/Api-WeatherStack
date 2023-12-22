const express = require("express");
const router = express.Router();
const axios = require("axios");

const weatherStackURL = "http://api.weatherstack.com/current";

// Função para buscar os dados do clima
const getWeatherData = async (city) => {
  try {
    const apiKey = "apiKey"; // fazer o .env
    const apiUrl = `${weatherStackURL}?access_key=${apiKey}&query=${city}`;
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error.message;
  }
};

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
    const { city } = req.body;

    // Validação da entrada do usuário
    if (!city || city.trim() === "") {
      throw { status: 400, message: "Por favor, insira um nome de cidade válido." };
    }

    const weatherData = await getWeatherData(city);

    if (!weatherData.current) {
      throw { status: 404, message: "Cidade não encontrada. Verifique o nome da cidade e tente novamente." };
    }

    res.render("details", { weatherData, city });
  } catch (error) {
    let errorMessage = "Ocorreu um erro ao obter informações meteorológicas. Tente novamente mais tarde.";

    // Tratamento de erros
    if (typeof error === "object" && error.status === 404) {
      errorMessage = error.message;
    } else if (typeof error === "object" && error.status === 400) {
      errorMessage = error.message;
    }

    res.render("error", { error: errorMessage });
  }
});

module.exports = router;
