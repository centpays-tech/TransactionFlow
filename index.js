const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Bank Working");
});

function generateUniqueTransactionId() {
    console.log("In Txn id")
    const timestamp = Date.now();
    console.log("a")
    const randomString = Math.random().toString(36).substr(2, 8);
    console.log("b")
    const transactionId = `${timestamp}-${randomString}-${timestamp}`;
  console.log("transactionId")
    return transactionId;
  }

app.post("/", (req, res) => {
  try {
    const {
      name,
      email,
      amount,
      currency,
      cardnumber,
      cardExpire,
      cardCVV,
      country,
      cardtype,
      txnId,
    } = req.body;

    console.log(txnId)
    const pgTransactionId = generateUniqueTransactionId();

    console.table({
      name,
      email,
      amount,
      currency,
      cardnumber,
      cardExpire,
      cardCVV,
      country,
      cardtype,
      pgTransactionId,
    });
    setTimeout(() => {
        res.status(202).json({
          code: "200",
          txnId,
          pgTransactionId,
          status: "Success",
          message: "Transaction captured successfully.",
        });
      }, 10000);
      
    
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
