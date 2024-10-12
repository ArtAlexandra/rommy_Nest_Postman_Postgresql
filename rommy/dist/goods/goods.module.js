"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodsModule = void 0;
const common_1 = require("@nestjs/common");
const goods_controller_1 = require("./goods.controller");
const goods_service_1 = require("./goods.service");
const sequelize_1 = require("@nestjs/sequelize");
const goods_model_1 = require("./goods.model");
const type_clothes_model_1 = require("../type-clothes/type-clothes.model");
const size_model_1 = require("../size/size.model");
const shops_model_1 = require("../shops/shops.model");
let GoodsModule = class GoodsModule {
};
exports.GoodsModule = GoodsModule;
exports.GoodsModule = GoodsModule = __decorate([
    (0, common_1.Module)({
        controllers: [goods_controller_1.GoodsController],
        providers: [goods_service_1.GoodsService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([goods_model_1.Goods]),
            sequelize_1.SequelizeModule.forFeature([type_clothes_model_1.TypeClothes]),
            sequelize_1.SequelizeModule.forFeature([size_model_1.Size]),
            sequelize_1.SequelizeModule.forFeature([shops_model_1.Shop])
        ],
        exports: [goods_service_1.GoodsService]
    })
], GoodsModule);
//# sourceMappingURL=goods.module.js.map