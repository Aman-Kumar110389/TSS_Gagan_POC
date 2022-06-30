export abstract class baseInventory{
    id? : number;
    name? : string;
    quantity? : number;
    dateofPurchase? : number;
}

export class Inventoryobj extends   baseInventory {
    categoryId? : string;
}

export class InventoryDetails extends   baseInventory  {
    categoryName? : string;
}