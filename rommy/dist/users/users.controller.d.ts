import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { AddBalanceDto } from './dto/addBalance.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(userDto: CreateUserDto): Promise<import("./users.model").User>;
    getAll(): Promise<import("./users.model").User[]>;
    getUser(id: number): Promise<CreateUserDto>;
    Login(userDto: UserDto): Promise<{
        access_token: string;
        id: number;
    }>;
    AddBalance(addBalance: AddBalanceDto): Promise<import("./users.model").User>;
}
