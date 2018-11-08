const router = require("express").Router();
const serviceRoutes = require("./services");

// Book routes
router.use("/services", serviceRoutes);

module.exports = router;
