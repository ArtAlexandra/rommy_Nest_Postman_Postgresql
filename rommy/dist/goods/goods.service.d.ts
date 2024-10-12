import { Goods } from './goods.model';
import { GoodsBigDto, GoodsDto } from './dto/goods.dto';
import { Size } from 'src/size/size.model';
import { TypeClothes } from 'src/type-clothes/type-clothes.model';
import { Shop } from 'src/shops/shops.model';
export declare class GoodsService {
    private goodsModel;
    private sizeModel;
    private typeclothesModel;
    private shopsModel;
    constructor(goodsModel: typeof Goods, sizeModel: typeof Size, typeclothesModel: typeof TypeClothes, shopsModel: typeof Shop);
    findOne(filter: {
        where: {
            id_g?: number | string;
            title?: string;
            article?: string;
        };
    }): Promise<Goods>;
    findAllParams(filter: {
        where: {
            id_g?: number | string;
            title?: string;
            article?: string;
            shopId?: number;
            typeId?: number;
        };
    }): Promise<Goods[]>;
    findAll(): Promise<Goods[]>;
    create(goodsDto: GoodsDto, image: string): Promise<Goods>;
    getGoodsId(id_g: number): Promise<GoodsDto>;
    getGoodsShopsId(id: number): Promise<Goods[]>;
    getGoodsTypeClothes(id: number): Promise<GoodsDto[]>;
    getGoods(): Promise<any[]>;
    getGoodsSortType(id: number): Promise<Goods[]>;
    getGoodsSortPrice(id: number): Promise<Goods[]>;
    getGoodsImages(id_g: number): Promise<GoodsBigDto>;
    getGoodsShop(name: string): Promise<GoodsDto[]>;
    getGoodsQuantity(id_g: number): Promise<number>;
    deleteGoods(id: number): Promise<void>;
}
