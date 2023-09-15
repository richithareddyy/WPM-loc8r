var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/other');
/* LOCATIONS.js */
router.get('/', ctrlLocations.homelist);
router.get('/locations',ctrlLocations.locationInfo);
router.get('/locations/review/new',ctrlLocations.addReview);
/*OTHERS.js*/
router.get('/about',ctrlOthers.about);

module.exports = router;
