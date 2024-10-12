import { BasketsService } from './baskets.service';
import { CreateBasketDto } from './dto/create-baskets.dto';
export declare class BasketsController {
    private readonly basketService;
    constructor(basketService: BasketsService);
    createBasket(createBasketDto: CreateBasketDto): Promise<import("./baskets.model").Basket>;
    removeOne(id: number): Promise<void>;
    getAllBaskets(): Promise<import("./baskets.model").Basket[]>;
    getBasketUser(id: number): Promise<import("./baskets.model").Basket[]>;
    buyBasket(id: number): Promise<string>;
}
