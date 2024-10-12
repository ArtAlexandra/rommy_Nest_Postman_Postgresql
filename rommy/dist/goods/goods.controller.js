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
exports.GoodsController = exports.storage = void 0;
const goods_dto_1 = require("./dto/goods.dto");
const goods_service_1 = require("./goods.service");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const auth_guard_1 = require("../users/auth.guard");
const multer_1 = require("multer");
const path = require("path");
exports.storage = {
    storage: (0, multer_1.diskStorage)({
        destination: '../front/public/image/goods',
        filename: (req, file, cb) => {
            const filename = path.parse(file.originalname).name.replace(/\s/g, '');
            const extension = path.parse(file.originalname).ext;
            cb(null, `${filename}${extension}`);
        }
    })
};
let GoodsController = class GoodsController {
    constructor(goodsService) {
        this.goodsService = goodsService;
    }
    async create(goodsDto, file) {
        try {
            const data = await this.goodsService.create(goodsDto, file.originalname);
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
    async getAll() {
        try {
            const data = await this.goodsService.findAll();
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
    async getShop(id_g) {
        try {
            const data = await this.goodsService.getGoodsId(id_g);
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
    async getShops(name) {
        try {
            const data = await this.goodsService.getGoodsShop(name);
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
    async getShopsAll(id_g) {
        try {
            const data = await this.goodsService.getGoodsImages(id_g);
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
    async getGoodsSortType(id) {
        try {
            const data = await this.goodsService.getGoodsSortType(id);
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
    async getGoodsSortPrice(id) {
        try {
            const data = await this.goodsService.getGoodsSortPrice(id);
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
    async getGoodsAll() {
        try {
            const data = await this.goodsService.getGoods();
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
    async getGoodsShopId(id) {
        try {
            const data = await this.goodsService.getGoodsShopsId(id);
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
    async geleteGoods(id) {
        try {
            const data = await this.goodsService.deleteGoods(id);
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
exports.GoodsController = GoodsController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('/create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', exports.storage)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [goods_dto_1.GoodsDto, Object]),
    __metadata("design:returntype", Promise)
], GoodsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/get-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoodsController.prototype, "getAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/get-goods/:id_g'),
    __param(0, (0, common_1.Param)('id_g')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodsController.prototype, "getShop", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/get-goodsname/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GoodsController.prototype, "getShops", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/get-goodsimages/:id_g'),
    __param(0, (0, common_1.Param)('id_g')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodsController.prototype, "getShopsAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/sorttype/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodsController.prototype, "getGoodsSortType", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/sortprice/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodsController.prototype, "getGoodsSortPrice", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/get-goodsall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoodsController.prototype, "getGoodsAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/get-goodshopsid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodsController.prototype, "getGoodsShopId", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)('/goods-delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodsController.prototype, "geleteGoods", null);
exports.GoodsController = GoodsController = __decorate([
    (0, common_1.Controller)('goods'),
    __metadata("design:paramtypes", [goods_service_1.GoodsService])
], GoodsController);
//# sourceMappingURL=goods.controller.js.map