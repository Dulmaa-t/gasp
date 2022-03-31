const express = require("express");
const router = new express.Router

// middlewares
const asyncHandler = require("../middleware/asyncHandler");

const authController = require('../controllers/author')

router
    .route("/")
    .post(asyncHandler(authController.create))
    .get(asyncHandler(authController.getList))

router
    .route("/:authorId/")
    .get(asyncHandler(authController.getDetail))
    .put(asyncHandler(authController.update))

module.exports = router
