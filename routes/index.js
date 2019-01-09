const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
// const userRoute = require('./user');

// API Routes
router.use("/api", apiRoutes);
// router.use("/user", userRoute);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;