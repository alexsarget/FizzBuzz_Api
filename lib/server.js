
const ExplorerController = require("./controllers/ExplorerController");

const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/v1/fizzbuzz/:score", (request,response) => {
    const score=request.params.score;
    const explorersInNumber=ExplorerController.getnumber(score);
    response.json({score: score, trick: explorersInNumber});
});
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});