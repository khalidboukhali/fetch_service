const axios = require("axios").default;

const instance = axios.create({
  baseURL: process.env.COUNTRIES_URL,
});

module.exports = instance;
