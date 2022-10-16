const express = require("express");
const {
  getAllWallets,
  addWallet,
} = require("../controllers/wallets.controller.js");

const router = express.Router();

router.get("/", getAllWallets);
router.post("/", addWallet);

module.exports = {
  router,
};
