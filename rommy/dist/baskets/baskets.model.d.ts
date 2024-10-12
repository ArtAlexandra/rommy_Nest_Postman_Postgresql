import { Model } from "sequelize-typescript";
import { Goods } from "src/goods/goods.model";
import { User } from "src/users/users.model";
export declare class Basket extends Model {
    id_b: number;
    userId: number;
    user: User;
    goodsId: number;
    goods: Goods;
    quantity: number;
    description: string;
    payment: boolean;
    discount: number;
}
