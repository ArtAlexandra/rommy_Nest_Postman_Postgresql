import { Goods } from "src/goods/goods.model";
import { User } from "src/users/users.model";
export declare class CreateBasketDto {
    readonly id_b: number;
    readonly userId: number;
    readonly user: User;
    readonly goods: Goods;
    readonly goodsId: number;
    readonly quantity: number;
    readonly description: string;
    readonly payment: boolean;
    readonly discount: number;
}
