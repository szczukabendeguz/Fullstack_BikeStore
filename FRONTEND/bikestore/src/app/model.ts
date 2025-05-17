export class Model {
    modelName: string | null;
    frontTravel: number;
    backTravel: number;
    askingPrice: number;
    userFullName: string | null;

    constructor(
        modelName: string | null,
        frontTravel: number,
        backTravel: number,
        askingPrice: number,
        userFullName: string | null
    ) {
        this.modelName = modelName;
        this.frontTravel = frontTravel;
        this.backTravel = backTravel;
        this.askingPrice = askingPrice;
        this.userFullName = userFullName;
    }
}
