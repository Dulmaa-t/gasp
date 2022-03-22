const express = require("express");
const router = new express.Router

// middlewares
const asyncHandler = require("../middleware/asyncHandler");

const videoController = require('../controllers/video')

router
    .route("/")
    .post(asyncHandler(videoController.create))
    .get(asyncHandler(videoController.getList))

router
    .route("/:videoId/")
    .get(asyncHandler(videoController.getVideo))

module.exports = router
