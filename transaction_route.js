const express = require("express");

const {initiateTransaction, getInfoOfTxn, getTransaction} = require("./transaction_controller");

const router = express.Router();

router.post("/transactions/initiate", initiateTransaction);
router.get("/transactions/info_transaction", getInfoOfTxn);
router.post("/transactions/get_transaction", getTransaction);

module.exports = router;