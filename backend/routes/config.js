const express = require("express")
const router = new express.Router

// middlewares
const asyncHandler = require("../middleware/asyncHandler");
const queryParser = require("../middleware/queryParser");

const configApp = require('../controllers/config')

router
  .route("/")
  .get(queryParser({ names: [''] }), asyncHandler(configApp.get))
  .post(asyncHandler(configApp.post))
  .put(asyncHandler(configApp.put))

module.exports = router;