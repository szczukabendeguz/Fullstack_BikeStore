export interface ModelCreateUpdatePayload {
    id: string | null;
    brandId: string | null;
    modelName: string | null;
    frontTravel: number;
    backTravel: number;
    askingPrice: number;
}


export class Model {
    id: string;
    modelName: string | null;
    frontTravel: number;
    backTravel: number;
    askingPrice: number;
    userFullName: string | null;

    constructor(
        id: string,
        modelName: string | null,
        frontTravel: number,
        backTravel: number,
        askingPrice: number,
        userFullName: string | null
    ) {
        this.id = id;
        this.modelName = modelName;
        this.frontTravel = frontTravel;
        this.backTravel = backTravel;
        this.askingPrice = askingPrice;
        this.userFullName = userFullName;
    }
}
