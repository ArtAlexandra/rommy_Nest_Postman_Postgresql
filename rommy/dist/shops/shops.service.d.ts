import { Shop } from './shops.model';
import { CreateShopDto } from './dto/create-shop.dto';
import { LogInShopDto } from './dto/login-shop.dto';
import { JwtService } from '@nestjs/jwt';
export declare class ShopsService {
    private shopModel;
    private jwtService;
    constructor(shopModel: typeof Shop, jwtService: JwtService);
    findOne(filter: {
        where: {
            id?: number | string;
            name?: string;
            email?: string;
            city?: string;
        };
    }): Promise<Shop>;
    findAll(): Promise<Shop[]>;
    login(loginShopDto: LogInShopDto): Promise<{
        access_token: string;
        id: number;
    }>;
    addPhoto(createShopDto: CreateShopDto, image: string): Promise<Shop>;
    create(createShopDto: CreateShopDto, image: string): Promise<Shop>;
    getShop(id: number): Promise<CreateShopDto>;
    getShopsCity(city: string): Promise<CreateShopDto[] | string>;
}
