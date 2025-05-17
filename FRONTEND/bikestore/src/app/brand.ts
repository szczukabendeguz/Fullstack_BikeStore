import { Model } from "./model";

export interface BrandCreateUpdatePayload {
  brandName: string | null;
  location: string | null;
}

export class Brand {
    id: string | null;
    brandName: string | null;
    location: string | null;
    models?: Model[];
    modelCount?: number;
    averageAskingPrice: number;

    constructor(
        id: string | null,
        brandName: string | null,
        location: string | null,
        averageAskingPrice: number,
        models?: Model[],
        modelCount?: number
    ) {
        this.id = id;
        this.brandName = brandName;
        this.location = location;
        this.averageAskingPrice = averageAskingPrice;
        this.models = models;
        this.modelCount = modelCount;
    }
}
