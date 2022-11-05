const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const productsController = require("../controllers/products");
const donateController = require("../controllers/donate");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/home", ensureAuth, productsController.getHome);
router.get("/feed", ensureAuth, productsController.getFeed);
router.get("/donate", ensureAuth, donateController.donateProduct);
router.get("/login", authController.getLogin);
router.post("/login", authController.productLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.productSignup);

module.exports = router;
