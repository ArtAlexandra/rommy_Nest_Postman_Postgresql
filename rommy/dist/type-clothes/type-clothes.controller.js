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
exports.TypeClothesController = void 0;
const type_clothes_dto_1 = require("./dto/type-clothes.dto");
const type_clothes_service_1 = require("./type-clothes.service");
const common_1 = require("@nestjs/common");
let TypeClothesController = class TypeClothesController {
    constructor(typeClothesService) {
        this.typeClothesService = typeClothesService;
    }
    create(typeClothesDto) {
        return this.typeClothesService.create(typeClothesDto);
    }
    getAll() {
        return this.typeClothesService.findAll();
    }
    getTypeClothes(name) {
        return this.typeClothesService.getTypeClothes(name);
    }
};
exports.TypeClothesController = TypeClothesController;
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [type_clothes_dto_1.TypeClothesDto]),
    __metadata("design:returntype", void 0)
], TypeClothesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/get-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TypeClothesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/get-typeclothes/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypeClothesController.prototype, "getTypeClothes", null);
exports.TypeClothesController = TypeClothesController = __decorate([
    (0, common_1.Controller)('type-clothes'),
    __metadata("design:paramtypes", [type_clothes_service_1.TypeClothesService])
], TypeClothesController);
//# sourceMappingURL=type-clothes.controller.js.map