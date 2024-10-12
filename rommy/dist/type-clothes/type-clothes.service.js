"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeClothesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const type_clothes_model_1 = require("./type-clothes.model");
let TypeClothesService = class TypeClothesService {
    constructor(typeClothesModel) {
        this.typeClothesModel = typeClothesModel;
    }
    findOne(filter) {
        return this.typeClothesModel.findOne({ ...filter });
    }
    findAll() {
        return this.typeClothesModel.findAll();
    }
    async create(typeClothesDto) {
        const typeClothes = new type_clothes_model_1.TypeClothes();
        const existingTypeClothesByName = await this.findOne({
            where: { name: typeClothesDto.name }
        });
        if (existingTypeClothesByName) {
            return {
                warningMessage: 'Уже существует такой тип одежды'
            };
        }
        typeClothes.name = typeClothesDto.name;
        return typeClothes.save();
    }
    async getTypeClothes(name) {
        const typeClothes = await this.findOne({ where: { name } });
        if (!typeClothes) {
            return "Такой магазин не найден";
        }
        return typeClothes;
    }
};
exports.TypeClothesService = TypeClothesService;
exports.TypeClothesService = TypeClothesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(type_clothes_model_1.TypeClothes)),
    __metadata("design:paramtypes", [Object])
], TypeClothesService);
//# sourceMappingURL=type-clothes.service.js.map