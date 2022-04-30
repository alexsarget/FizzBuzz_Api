class FizzBuzzService{
    static applyValidationInExplorer(explorer){
        if(explorer.score%5 === 0 && explorer.score%3 === 0){
            explorer.trick = "FIZZBUZZ";
        }else if (explorer.score%5 === 0){
            explorer.trick = "BUZZ";
        }else if(explorer.score%3 === 0){
            explorer.trick = "FIZZ";
        }else{
            explorer.trick = explorer.score;
        }
        return explorer;
    }
    static applyValidationInNumber(number){
        const explorer=new Object();
        if(number%5===0 && number%3===0){
            explorer.trick="FIZZBUZZ";
        }else if (number%5 === 0){
            explorer.trick= "BUZZ";
        }else if(number%3 === 0){
            explorer.trick = "FIZZ";
        }else{
            explorer.trick = number;
        }
        return explorer.trick;
    }
}

module.exports=FizzBuzzService;