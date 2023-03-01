export interface Warehouse {
    name: string;
    price: number;
    fiveG: boolean;
}

export interface WarehouseWithDiscountPrice {
    name: string;
    price: number;
    fiveG: boolean;
    afterDiscountPrice: number;
}