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
exports.ShopsController = exports.storage = void 0;
const common_1 = require("@nestjs/common");
const shops_service_1 = require("./shops.service");
const create_shop_dto_1 = require("./dto/create-shop.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path = require("path");
const login_shop_dto_1 = require("./dto/login-shop.dto");
const auth_guard_1 = require("../users/auth.guard");
exports.storage = {
    storage: (0, multer_1.diskStorage)({
        destination: '../front/public/image/shops',
        filename: (req, file, cb) => {
            console.log(file);
            const filename = path.parse(file.originalname).name.replace(/\s/g, '');
            const extension = path.parse(file.originalname).ext;
            cb(null, `${filename}${extension}`);
        }
    })
};
let ShopsController = class ShopsController {
    constructor(shopsService) {
        this.shopsService = shopsService;
    }
    async create(shopDto, file) {
        try {
            const data = await this.shopsService.create(shopDto, file.originalname);
            return data;
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                warning: error.message,
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: error
            });
        }
    }
    getAll() {
        return this.shopsService.findAll();
    }
    async getShop(id) {
        try {
            const data = await this.shopsService.getShop(id);
            return data;
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                warning: error.message,
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: error
            });
        }
    }
    getShops(city) {
        return this.shopsService.getShopsCity(city);
    }
    async login(loginShopDto) {
        try {
            const data = await this.shopsService.login(loginShopDto);
            return data;
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                warning: error.message,
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: error
            });
        }
    }
};
exports.ShopsController = ShopsController;
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', exports.storage)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shop_dto_1.CreateShopDto, Object]),
    __metadata("design:returntype", Promise)
], ShopsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/get-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShopsController.prototype, "getAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/get-shop/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ShopsController.prototype, "getShop", null);
__decorate([
    (0, common_1.Get)('/get-shops/:city'),
    __param(0, (0, common_1.Param)('city')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShopsController.prototype, "getShops", null);
__decorate([
    (0, common_1.Post)('/shop-login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_shop_dto_1.LogInShopDto]),
    __metadata("design:returntype", Promise)
], ShopsController.prototype, "login", null);
exports.ShopsController = ShopsController = __decorate([
    (0, common_1.Controller)('shops'),
    __metadata("design:paramtypes", [shops_service_1.ShopsService])
], ShopsController);
//# sourceMappingURL=shops.controller.js.map