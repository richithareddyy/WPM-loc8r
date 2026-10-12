const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/other');

router.get('/', ctrlLocations.homelist);
router.get('/locations', ctrlLocations.locationInfo);
router.get('/locations/review/new', ctrlLocations.addReview);

router.get('/about', ctrlOthers.about);

module.exports = router;
