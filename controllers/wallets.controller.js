const mongoose = require("mongoose");
const { Wallet } = require("../models/wallet.model.js");

const getAllWallets = async (req, res) => {
  try {
    const allWallets = await Wallet.find();
    res.status(200).json(allWallets);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const addWallet = async (req, res) => {
  const body = req.body;
  const newWallet = new Wallet(body);
  const checkHero = await Wallet.exists({
    name: newWallet.name,
  });
  if (checkHero) {
    res.status(409).json({
      message: `Wallet with name ${newWallet.walletName} already exists`,
    });
  } else {
    try {
      await newWallet.save();
      res.status(201).json(newWallet);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  }
};

module.exports = {
  getAllWallets,
  addWallet,
};
