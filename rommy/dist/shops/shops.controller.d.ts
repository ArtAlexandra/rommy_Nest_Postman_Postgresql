/// <reference types="multer" />
import { ShopsService } from './shops.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { LogInShopDto } from './dto/login-shop.dto';
export declare const storage: {
    storage: import("multer").StorageEngine;
};
export declare class ShopsController {
    private shopsService;
    constructor(shopsService: ShopsService);
    create(shopDto: CreateShopDto, file: Express.Multer.File): Promise<import("./shops.model").Shop>;
    getAll(): Promise<import("./shops.model").Shop[]>;
    getShop(id: number): Promise<CreateShopDto>;
    getShops(city: string): Promise<string | CreateShopDto[]>;
    login(loginShopDto: LogInShopDto): Promise<{
        access_token: string;
        id: number;
    }>;
}
