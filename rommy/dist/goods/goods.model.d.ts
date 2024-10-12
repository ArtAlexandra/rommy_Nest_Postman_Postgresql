import { Model } from "sequelize-typescript";
import { Shop } from "src/shops/shops.model";
import { TypeClothes } from "src/type-clothes/type-clothes.model";
export declare class Goods extends Model {
    id_g: number;
    title: string;
    price: number;
    article: string;
    quantity: number;
    description: string;
    mark: number;
    composition: string;
    state: string;
    firstImage: string;
    typeId: number;
    type: TypeClothes;
    shopId: number;
    shop: Shop;
}
