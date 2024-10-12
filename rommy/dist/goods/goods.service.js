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
exports.GoodsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const goods_model_1 = require("./goods.model");
const size_model_1 = require("../size/size.model");
const type_clothes_model_1 = require("../type-clothes/type-clothes.model");
const shops_model_1 = require("../shops/shops.model");
let GoodsService = class GoodsService {
    constructor(goodsModel, sizeModel, typeclothesModel, shopsModel) {
        this.goodsModel = goodsModel;
        this.sizeModel = sizeModel;
        this.typeclothesModel = typeclothesModel;
        this.shopsModel = shopsModel;
    }
    findOne(filter) {
        return this.goodsModel.findOne({ ...filter });
    }
    findAllParams(filter) {
        return this.goodsModel.findAll({ ...filter });
    }
    findAll() {
        return this.goodsModel.findAll();
    }
    async create(goodsDto, image) {
        const goods = new goods_model_1.Goods();
        const existingGoodsByArticle = await this.findOne({
            where: { article: goodsDto.article }
        });
        if (existingGoodsByArticle) {
            throw new Error('Одежда с таким артикулом уже существует');
        }
        const existingGoodsByTitle = await this.findOne({
            where: { title: goodsDto.title }
        });
        if (existingGoodsByTitle) {
            throw new Error('Одежда с таким названием уже существует');
        }
        goods.composition = goodsDto.composition;
        goods.quantity = goodsDto.quantity;
        goods.description = goodsDto.description;
        goods.mark = goodsDto.mark;
        goods.state = goodsDto.state;
        goods.title = goodsDto.title;
        goods.price = goodsDto.price;
        goods.shopId = goodsDto.shopId;
        goods.typeId = goodsDto.typeId;
        goods.article = goodsDto.article;
        goods.firstImage = image;
        return goods.save();
    }
    async getGoodsId(id_g) {
        const goods = await this.findOne({ where: { id_g } });
        if (!goods) {
            throw new Error("Такой товар не найден");
        }
        return goods;
    }
    async getGoodsShopsId(id) {
        const goods = await this.findAllParams({ where: { shopId: id } });
        if (!goods.length) {
            throw new Error("У данного магазина пока нет товаров");
        }
        return goods;
    }
    async getGoodsTypeClothes(id) {
        let goods = await this.findAll();
        goods = goods.filter(item => item.typeId === id);
        if (!goods) {
            throw new Error("Нет ни одной одежды такого типа");
        }
        return goods;
    }
    async getGoods() {
        let imagesGoods = await this.goodsModel.findAll();
        let a = imagesGoods.map(item => {
            return {
                id_g: item.id_g,
                title: item.title,
            };
        });
        console.log(a);
        if (!imagesGoods.length) {
            throw new Error("Такой магазин не найден");
        }
        return a;
    }
    async getGoodsSortType(id) {
        const goods = await this.findAllParams({ where: { typeId: id } });
        if (!goods) {
            throw new Error("Такого типа одежды нет");
        }
        return goods;
    }
    async getGoodsSortPrice(id) {
        let goods = await this.findAll();
        if (id == 1) {
            goods = goods.sort((a, b) => a.price - b.price);
        }
        if (id == -1) {
            goods = goods.sort((a, b) => b.price - a.price);
        }
        if (!goods) {
            throw new Error("Возникла какая-то ошибка");
        }
        return goods;
    }
    async getGoodsImages(id_g) {
        let goods = await this.findOne({ where: { id_g: id_g } });
        if (!goods) {
            throw new Error("Такой товар не найден");
        }
        let types = await this.typeclothesModel.findOne({ where: { id: goods.typeId } });
        let sizeArray = await this.sizeModel.findAll({ where: { id_g: goods.id_g } });
        let shop = await this.shopsModel.findOne({ where: { id: goods.shopId } });
        let size = sizeArray.map(item => item.title);
        let answer = {
            id_g: goods.id_g,
            title: goods.title,
            price: goods.price,
            firstImage: goods.firstImage,
            article: goods.article,
            quantity: goods.quantity,
            description: goods.description,
            mark: goods.mark,
            composition: goods.composition,
            state: goods.state,
            typeName: types.name,
            shopName: shop.name,
            size: size
        };
        return answer;
    }
    async getGoodsShop(name) {
        let goods = await this.findAll();
        goods = goods.filter(item => item.shop.name == name);
        if (!goods) {
            throw new Error("У этого магазина пока нет товара");
        }
        return goods;
    }
    async getGoodsQuantity(id_g) {
        let goods = await this.findOne({ where: { id_g } });
        if (!goods) {
            throw new Error("Такой товар не найден");
        }
        return goods.quantity;
    }
    async deleteGoods(id) {
        const goods = await this.findOne({ where: { id_g: id } });
        if (!goods) {
            throw new Error("Такого товара не существует");
        }
        await goods.destroy();
    }
};
exports.GoodsService = GoodsService;
exports.GoodsService = GoodsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(goods_model_1.Goods)),
    __param(1, (0, sequelize_1.InjectModel)(size_model_1.Size)),
    __param(2, (0, sequelize_1.InjectModel)(type_clothes_model_1.TypeClothes)),
    __param(3, (0, sequelize_1.InjectModel)(shops_model_1.Shop)),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], GoodsService);
//# sourceMappingURL=goods.service.js.map