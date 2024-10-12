"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const users_model_1 = require("./users/users.model");
const sequelize_1 = require("@nestjs/sequelize");
const shops_module_1 = require("./shops/shops.module");
const type_clothes_module_1 = require("./type-clothes/type-clothes.module");
const goods_module_1 = require("./goods/goods.module");
const size_module_1 = require("./size/size.module");
const baskets_module_1 = require("./baskets/baskets.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '12345qwert',
                database: 'rommy',
                models: [users_model_1.User],
                autoLoadModels: true,
            }),
            users_module_1.UsersModule,
            shops_module_1.ShopsModule,
            type_clothes_module_1.TypeClothesModule,
            goods_module_1.GoodsModule,
            size_module_1.SizeModule,
            baskets_module_1.BasketsModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map