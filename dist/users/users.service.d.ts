import { User } from './user.model';
import { Sequelize } from 'sequelize-typescript';
export declare class UsersService {
    private userModel;
    private sequelize;
    constructor(userModel: typeof User, sequelize: Sequelize);
    create(): Promise<User>;
    createMany(): Promise<void>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: number, name: string, age: number, surname: string, email: string): Promise<User>;
    remove(id: string): Promise<void>;
}
