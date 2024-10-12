import { SizeService } from './size.service';
import { SizeDto } from './dto/size.dto';
export declare class SizeController {
    private sizeService;
    constructor(sizeService: SizeService);
    create(sizeDto: SizeDto): Promise<import("./size.model").Size | {
        warningMessage: string;
    }>;
    getAll(): Promise<import("./size.model").Size[]>;
    getSize(id_g: number): Promise<string | import("./size.model").Size>;
}
