
//const ExplorerController = require("./controllers/ExplorerController");
const FizzBuzzService=require("./../lib/services/FizzBuzzService")
/*
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/v1/fizzbuzz/:score", (request,response) => {
    const score=request.params.score;
    const explorersInMission=ExplorerController.getExplorerByMission(score);
    response.json(explorersInMission);
});
*/

const explorermission=FizzBuzzService.applyValidationInNumber(10);
console.log(explorermission)