const router = require("express").Router();
const countryService = require("../service/country.service");

router.get("/countries", countryService.getCountries);
router.get("/countries/country-details", countryService.getCountryDetail);

module.exports = router;
