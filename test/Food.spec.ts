import { Food } from "../src/model/food";

describe('class Food', () => {
    var instance = new Food("a", 1, "b");
    let originalLog = console.log;

    beforeEach(() => {
        instance = new Food("Pizza", 10, "Pizza Hut");
    })
    afterEach(() => {
        console.log = originalLog;
    });


    it('should return the name of the food with the get food command', () => {
        expect(instance.name).toBe("Pizza");
    });
    it('should return the cost of the food with the get cost command', () => {
        expect(instance.cost).toBe(10);
    });
    it('should return the name of the restaurant with the get restaurant command', () => {
        expect(instance.restaurant).toBe("Pizza Hut");
    });
    it('should return a stylised string which describe the product whith the get_product command', () => {
        expect(instance.get_product()).toBe("Pizza-10€");
    });
});