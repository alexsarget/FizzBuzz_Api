
const FizzBuzzService=require("./../services/FizzBuzzService");

class ExplorerController{
    static getnumber(number){
        const Explorer=FizzBuzzService.applyValidationInNumber(number);
        return Explorer;
    }
}

module.exports=ExplorerController;