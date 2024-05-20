const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

require("./database");

const TransactionRoutes = require("./transaction_route");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
res.send("Working")
});

app.use("/", TransactionRoutes);

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});

