/// <reference types="multer" />
import { GoodsDto } from './dto/goods.dto';
import { GoodsService } from './goods.service';
export declare const storage: {
    storage: import("multer").StorageEngine;
};
export declare class GoodsController {
    private goodsService;
    constructor(goodsService: GoodsService);
    create(goodsDto: GoodsDto, file: any): Promise<import("./goods.model").Goods>;
    getAll(): Promise<import("./goods.model").Goods[]>;
    getShop(id_g: number): Promise<GoodsDto>;
    getShops(name: string): Promise<GoodsDto[]>;
    getShopsAll(id_g: number): Promise<import("./dto/goods.dto").GoodsBigDto>;
    getGoodsSortType(id: number): Promise<import("./goods.model").Goods[]>;
    getGoodsSortPrice(id: number): Promise<import("./goods.model").Goods[]>;
    getGoodsAll(): Promise<any[]>;
    getGoodsShopId(id: number): Promise<import("./goods.model").Goods[]>;
    geleteGoods(id: number): Promise<void>;
}
