import { Size } from './size.model';
import { SizeDto } from './dto/size.dto';
import { Goods } from 'src/goods/goods.model';
export declare class SizeService {
    private sizeModel;
    private goodsModel;
    constructor(sizeModel: typeof Size, goodsModel: typeof Goods);
    findOne(filter: {
        where: {
            id?: number | string;
            title?: string;
            id_g?: number;
        };
    }): Promise<Size>;
    findAll(): Promise<Size[]>;
    create(sizeDto: SizeDto): Promise<Size | {
        warningMessage: string;
    }>;
    getSize(id_g: number): Promise<Size | string>;
}
