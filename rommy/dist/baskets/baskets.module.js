"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketsModule = void 0;
const common_1 = require("@nestjs/common");
const baskets_controller_1 = require("./baskets.controller");
const baskets_service_1 = require("./baskets.service");
const sequelize_1 = require("@nestjs/sequelize");
const baskets_model_1 = require("./baskets.model");
const users_model_1 = require("../users/users.model");
const goods_model_1 = require("../goods/goods.model");
let BasketsModule = class BasketsModule {
};
exports.BasketsModule = BasketsModule;
exports.BasketsModule = BasketsModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([baskets_model_1.Basket]), sequelize_1.SequelizeModule.forFeature([users_model_1.User]), sequelize_1.SequelizeModule.forFeature([goods_model_1.Goods])],
        controllers: [baskets_controller_1.BasketsController],
        providers: [baskets_service_1.BasketsService],
        exports: [baskets_service_1.BasketsService]
    })
], BasketsModule);
//# sourceMappingURL=baskets.module.js.map