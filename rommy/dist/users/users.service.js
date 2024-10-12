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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("./users.model");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    findOne(filter) {
        return this.userModel.findOne({ ...filter });
    }
    findAll() {
        return this.userModel.findAll();
    }
    async create(createUserDto) {
        const user = new users_model_1.User();
        const existingUserByEmail = await this.findOne({
            where: { email: createUserDto.email }
        });
        if (existingUserByEmail) {
            throw new Error('Пользователь с таким email уже существует');
        }
        const existingUserByUsername = await this.findOne({
            where: { username: createUserDto.username }
        });
        if (existingUserByUsername) {
            throw new Error('Пользователь с таким именем уже существует');
        }
        const existingUserByPhone = await this.findOne({
            where: { phone: createUserDto.phone }
        });
        if (existingUserByPhone) {
            throw new Error('Пользователь с таким номером телефона уже существует');
        }
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        user.username = createUserDto.username;
        user.email = createUserDto.email;
        user.password = hashedPassword;
        user.phone = createUserDto.phone;
        user.balance = createUserDto.balance;
        return user.save();
    }
    async getUser(id) {
        const user = await this.findOne({ where: { id } });
        if (!user) {
            throw new Error("Такой пользователь не найден");
        }
        return user;
    }
    async login(userDto) {
        const existingUserByEmail = await this.findOne({
            where: { email: userDto.email }
        });
        if (!existingUserByEmail) {
            throw new Error("Пользователь с такой почтой не найден");
        }
        ;
        const passwordValid = await bcrypt.compare(userDto.password, existingUserByEmail.password);
        if (!passwordValid) {
            throw new Error("Пользователь с таким паролем не найден");
        }
        ;
        const payload = { sub: existingUserByEmail.id, username: existingUserByEmail.username };
        const access_token = await this.jwtService.signAsync(payload);
        return {
            access_token: access_token, id: existingUserByEmail?.id
        };
    }
    async AddBalance(addBalance) {
        const user = await this.findOne({ where: { id: addBalance.id } });
        console.log(user);
        if (!user) {
            throw new Error('Такого пользователя не существует');
        }
        if (addBalance.balance <= 0) {
            throw new Error('Баланс можно пополнить только на положительную сумму');
        }
        const balance = user.balance + addBalance.balance;
        await this.userModel.update({ balance }, { where: { id: addBalance.id } });
        return await this.findOne({ where: { id: addBalance.id } });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(users_model_1.User)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map