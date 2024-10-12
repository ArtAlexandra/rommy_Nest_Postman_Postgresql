import { TypeClothesDto } from './dto/type-clothes.dto';
import { TypeClothesService } from './type-clothes.service';
export declare class TypeClothesController {
    private typeClothesService;
    constructor(typeClothesService: TypeClothesService);
    create(typeClothesDto: TypeClothesDto): Promise<import("./type-clothes.model").TypeClothes | {
        warningMessage: string;
    }>;
    getAll(): Promise<import("./type-clothes.model").TypeClothes[]>;
    getTypeClothes(name: string): Promise<string | TypeClothesDto>;
}
