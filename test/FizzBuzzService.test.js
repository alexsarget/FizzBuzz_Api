const FizzBuzzService=require("./../lib/services/FizzBuzzService");


describe("Test Para ExplorerController",()=>{
    test("Ejercicio 3 Requerimiento 1: Obtener el mismo numero ingresado",()=>{
        const Explorers_1=FizzBuzzService.applyValidationInNumber(1);
        expect(Explorers_1).toBe(1);
    });
    test("Ejercicio 3 Requerimiento 2: Obtener 'Fizz' con numeros divisible en 3",()=>{
        const Explorers_1=FizzBuzzService.applyValidationInNumber(3);
        expect(Explorers_1).toBe("FIZZ");
    });
    test("Ejercicio 3 Requerimiento 3: Obtener 'Buzz' con numeros divisible en 5",()=>{
        const Explorers_1=FizzBuzzService.applyValidationInNumber(5);
        expect(Explorers_1).toBe("BUZZ");
    });
    test("Ejercicio 3 Requerimiento 4: Obtener 'FizzBuzz' con numeros divisible en 3 y 5",()=>{
        const Explorers_1=FizzBuzzService.applyValidationInNumber(15);
        expect(Explorers_1).toBe("FIZZBUZZ");
    });

})