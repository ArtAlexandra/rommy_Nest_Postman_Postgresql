import { TypeClothes } from './type-clothes.model';
import { TypeClothesDto } from './dto/type-clothes.dto';
export declare class TypeClothesService {
    private typeClothesModel;
    constructor(typeClothesModel: typeof TypeClothes);
    findOne(filter: {
        where: {
            id?: number | string;
            name?: string;
        };
    }): Promise<TypeClothes>;
    findAll(): Promise<TypeClothes[]>;
    create(typeClothesDto: TypeClothesDto): Promise<TypeClothes | {
        warningMessage: string;
    }>;
    getTypeClothes(name: string): Promise<TypeClothesDto | string>;
}
