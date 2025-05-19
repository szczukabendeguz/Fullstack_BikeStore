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
    brandId: string | null;
    modelName: string | null;
    frontTravel: number;
    backTravel: number;
    askingPrice: number;
    userFullName: string | null;

    constructor(
        id: string,
        brandId: string | null,
        modelName: string | null,
        frontTravel: number,
        backTravel: number,
        askingPrice: number,
        userFullName: string | null
    ) {
        this.id = id;
        this.brandId = brandId;
        this.modelName = modelName;
        this.frontTravel = frontTravel;
        this.backTravel = backTravel;
        this.askingPrice = askingPrice;
        this.userFullName = userFullName;
    }
}
