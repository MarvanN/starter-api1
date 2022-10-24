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
const user_model_1 = require("./user.model");
const sequelize_typescript_1 = require("sequelize-typescript");
let UsersService = class UsersService {
    constructor(userModel, sequelize) {
        this.userModel = userModel;
        this.sequelize = sequelize;
    }
    async create() {
        const userData = {
            id: 123,
            name: 'asdasd',
            age: 15,
            surname: 'asdasd',
            email: 'ad@gmail.com'
        };
        const user = await this.userModel.create(userData);
        return user;
    }
    async createMany() {
        console.log('here');
        try {
            await this.sequelize.transaction(async (t) => {
                const transactionHost = { transaction: t };
                await this.userModel.create({
                    id: 103,
                    name: 'asdasd',
                    age: 15,
                    surname: 'asdasd',
                    email: 'ad@gmail.com'
                }, transactionHost);
                await this.userModel.create({
                    id: 104,
                    name: 'aaa',
                    age: 17,
                    surname: 'aaaa',
                    email: 'aaaa@gmail.com'
                }, transactionHost);
                console.log(this.userModel);
            });
        }
        catch (err) {
            console.log('here error', err);
        }
    }
    async findAll() {
        return this.userModel.findAll();
    }
    findOne(id) {
        return this.userModel.findOne({
            where: {
                id,
            },
        });
    }
    async update(id, name, age, surname, email) {
        let data = {
            'id': id,
            'name': name,
            'age': age,
            'surname': surname,
            'email': email
        };
        await this.userModel.update({ id }, data);
        return await this.userModel.findOne({
            where: {
                id,
            },
        });
    }
    async remove(id) {
        const user = await this.findOne(id);
        await user.destroy();
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object, sequelize_typescript_1.Sequelize])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map