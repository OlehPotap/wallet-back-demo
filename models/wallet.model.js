const mongoose = require("mongoose");

const wallet = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mnemonic: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      default: 0,
    },
    transactions: [
      {
        transactionAmount: {
          type: Number,
        },
        transactionDirection: {
          type: String,
        },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Wallet = mongoose.model("wallets", wallet);

module.exports = {
  Wallet,
};
