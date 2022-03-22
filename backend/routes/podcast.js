const express = require("express");
const router = new express.Router

// middlewares
const asyncHandler = require("../middleware/asyncHandler");

const podcastController = require('../controllers/podcast')
const { upload } = require("../services/file");

router
    .route("/")
    .post(
        upload.single("image"),
        asyncHandler(podcastController.create)
    )
    .get(asyncHandler(podcastController.getList))

router
    .route("/:podcastId/")
    .get(asyncHandler(podcastController.getPodcast))

module.exports = router
