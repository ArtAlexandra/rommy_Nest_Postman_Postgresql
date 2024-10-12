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
exports.BasketsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const baskets_model_1 = require("./baskets.model");
const users_model_1 = require("../users/users.model");
const goods_model_1 = require("../goods/goods.model");
let BasketsService = class BasketsService {
    constructor(basketModel, userModel, goodsModel) {
        this.basketModel = basketModel;
        this.userModel = userModel;
        this.goodsModel = goodsModel;
    }
    async getBasketUser(id) {
        const basket = await this.basketModel.findAll({ include: [users_model_1.User, goods_model_1.Goods], where: { userId: id } });
        return basket;
    }
    findOne(filter) {
        return this.basketModel.findOne({ ...filter });
    }
    findAll() {
        return this.basketModel.findAll({ include: [users_model_1.User, goods_model_1.Goods] });
    }
    async buyGoods(id) {
        const goods = await this.basketModel.findOne({
            where: { id_b: id },
            include: [{ model: users_model_1.User }, { model: goods_model_1.Goods }]
        });
        if (!goods) {
            throw new Error("Такой товар не найден");
        }
        if (goods.payment) {
            throw new Error('Этот товар уже оплачен');
        }
        if (!goods.quantity) {
            throw new Error("Добавьте необходимое количество товара!");
        }
        if (goods.user.balance < goods.quantity * goods.goods.price) {
            throw new Error("Средств на счету не хватает для покупки товара. Пожалуйста, пополните баланс.");
        }
        if (goods.quantity > goods.goods.quantity) {
            throw new Error("К сожалению, сейчас на складе нет такого количества товара.");
        }
        const balance = goods.user.balance - goods.quantity * goods.goods.price;
        let quantity = 0;
        const payment = true;
        await this.basketModel.update({ quantity, payment }, { where: { id_b: id } });
        quantity = goods.goods.quantity - goods.quantity;
        await this.goodsModel.update({ quantity }, { where: { id_g: goods.goods.id_g } });
        await this.userModel.update({ balance }, { where: { id: goods.user.id } });
        return `Товар успешно куплен`;
    }
    async remove(id) {
        const goodsDelete = await this.basketModel.findOne({
            where: { id_b: id }
        });
        await goodsDelete.destroy();
    }
    async create(createBasketDto) {
        const existingGoodsByGoodsId = await this.findOne({
            where: { goodsId: createBasketDto.goodsId }
        });
        if (!existingGoodsByGoodsId) {
            throw new Error('Такого товара не существует');
        }
        const existinguserById = await this.userModel.findOne({
            where: { id: createBasketDto.userId }
        });
        if (!existinguserById) {
            throw new Error('Такого пользователя не существует');
        }
        if (createBasketDto.quantity <= 0) {
            throw new Error('Можно добавить в карзину только положительное число вещей');
        }
        const goods = await this.goodsModel.findOne({ where: { id_g: createBasketDto.goodsId } });
        const quantity = goods.quantity - createBasketDto.quantity;
        await this.goodsModel.update({ quantity }, { where: { id_g: createBasketDto.goodsId } });
        const basket = new baskets_model_1.Basket();
        basket.goodsId = createBasketDto.goodsId;
        basket.userId = createBasketDto.userId;
        basket.payment = createBasketDto.payment;
        basket.description = createBasketDto.description;
        basket.discount = createBasketDto.discount;
        basket.quantity = createBasketDto.quantity;
        return basket.save();
    }
};
exports.BasketsService = BasketsService;
exports.BasketsService = BasketsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(baskets_model_1.Basket)),
    __param(1, (0, sequelize_1.InjectModel)(users_model_1.User)),
    __param(2, (0, sequelize_1.InjectModel)(goods_model_1.Goods)),
    __metadata("design:paramtypes", [Object, Object, Object])
], BasketsService);
//# sourceMappingURL=baskets.service.js.map