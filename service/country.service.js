const axios = require("../config/axiosConfig");

let getCountries = (req, res) => {
  const apiUrl = process.env.COUNTRIES_URL;

  axios
    .get(apiUrl)
    .then((response) => {
      const countries = response.data;
      res.render("countries", { countries });
    })
    .catch((err) => {
      res.render("error");
    });
};

// Function to get country details
let getCountryDetail = (req, res) => {
  const apiUrl = process.env.COUNTRIES_URL;

  axios
    .get(apiUrl)
    .then((response) => {
      const countryName = req.query.country;
      const countries = response.data;
      const selectedCountry = countries.find(
        (country) => country.name.common === countryName
      );
      res.render("countryDetails", { country: selectedCountry });
    })
    .catch((err) => {
      res.render("error");
    });
};

module.exports = { getCountries, getCountryDetail };
