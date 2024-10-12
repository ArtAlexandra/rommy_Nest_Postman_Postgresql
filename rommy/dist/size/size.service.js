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
exports.SizeService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const size_model_1 = require("./size.model");
const goods_model_1 = require("../goods/goods.model");
let SizeService = class SizeService {
    constructor(sizeModel, goodsModel) {
        this.sizeModel = sizeModel;
        this.goodsModel = goodsModel;
    }
    findOne(filter) {
        return this.sizeModel.findOne({ ...filter });
    }
    findAll() {
        return this.sizeModel.findAll();
    }
    async create(sizeDto) {
        const size = new size_model_1.Size();
        const goods = await this.goodsModel.findOne({ where: { id_g: sizeDto.id_g } });
        if (goods !== null) {
            size.title = sizeDto.title;
            size.id_g = sizeDto.id_g;
            return size.save();
        }
        return {
            warningMessage: "Такой товар не найден"
        };
    }
    async getSize(id_g) {
        let sizeGoods = await this.findOne({ where: { id_g: id_g } });
        if (!sizeGoods) {
            return "Такой магазин не найден";
        }
        return sizeGoods;
    }
};
exports.SizeService = SizeService;
exports.SizeService = SizeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(size_model_1.Size)),
    __param(1, (0, sequelize_1.InjectModel)(goods_model_1.Goods)),
    __metadata("design:paramtypes", [Object, Object])
], SizeService);
//# sourceMappingURL=size.service.js.map