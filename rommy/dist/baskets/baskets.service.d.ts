import { Basket } from './baskets.model';
import { User } from 'src/users/users.model';
import { Goods } from 'src/goods/goods.model';
import { CreateBasketDto } from './dto/create-baskets.dto';
export declare class BasketsService {
    private basketModel;
    private userModel;
    private goodsModel;
    constructor(basketModel: typeof Basket, userModel: typeof User, goodsModel: typeof Goods);
    getBasketUser(id: number): Promise<Basket[]>;
    findOne(filter: {
        where: {
            id_b?: number | string;
            goodsId?: number | string;
        };
    }): Promise<Basket>;
    findAll(): Promise<Basket[]>;
    buyGoods(id: number): Promise<string>;
    remove(id: number): Promise<void>;
    create(createBasketDto: CreateBasketDto): Promise<Basket>;
}
