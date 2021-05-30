export class Food
{
    _name:string;
    _cost:number;
    _restaurant:string;
    constructor(name:string, cost:number, restaurant:string)
    {
        this._name = name;
        this._cost = cost;
        this._restaurant = restaurant;
    }
    
    get name() : string {
        return this._name;
    }
    get cost() : number {
        return this._cost;
    }
    get restaurant() : string {
        return this._restaurant;
    }
    get_product() {
        return (this._name + "-" + String(this._cost) + "€");
    }
}