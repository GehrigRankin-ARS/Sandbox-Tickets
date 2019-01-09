const router = require("express").Router();
const availityController = require("../controllers/availityController");

// NYT routes
router.route("/availity")
    .get(availityController.apiCall)

module.exports = router;