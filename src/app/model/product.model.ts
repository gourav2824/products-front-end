export class Product {
    constructor(private id: number, private name: String, private price: number) {}

    public getId(): number {
        return this.id;
    }

    public getName(): String {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }
}
