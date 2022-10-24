import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(): {
        id: Promise<void>;
    };
    findAll(): Promise<import("./user.model").User[]>;
    findOne(id: string): Promise<import("./user.model").User>;
    update(id: number, name: string, age: number, surname: string, email: string, updateUserDto: UpdateUserDto): Promise<import("./user.model").User>;
    remove(id: string): Promise<void>;
}
