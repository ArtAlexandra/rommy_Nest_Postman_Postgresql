"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeClothesModule = void 0;
const common_1 = require("@nestjs/common");
const type_clothes_controller_1 = require("./type-clothes.controller");
const type_clothes_service_1 = require("./type-clothes.service");
const sequelize_1 = require("@nestjs/sequelize");
const type_clothes_model_1 = require("./type-clothes.model");
let TypeClothesModule = class TypeClothesModule {
};
exports.TypeClothesModule = TypeClothesModule;
exports.TypeClothesModule = TypeClothesModule = __decorate([
    (0, common_1.Module)({
        controllers: [type_clothes_controller_1.TypeClothesController],
        providers: [type_clothes_service_1.TypeClothesService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([type_clothes_model_1.TypeClothes])
        ],
    })
], TypeClothesModule);
//# sourceMappingURL=type-clothes.module.js.map