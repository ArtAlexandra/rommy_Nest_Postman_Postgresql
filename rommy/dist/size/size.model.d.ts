import { Model } from "sequelize-typescript";
import { Goods } from "src/goods/goods.model";
export declare class Size extends Model {
    id: number;
    title: string;
    id_g: number;
    goods: Goods;
}
