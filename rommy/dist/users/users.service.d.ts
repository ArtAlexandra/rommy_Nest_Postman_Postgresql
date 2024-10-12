import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { AddBalanceDto } from './dto/addBalance.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private userModel;
    private jwtService;
    constructor(userModel: typeof User, jwtService: JwtService);
    findOne(filter: {
        where: {
            id?: number | string;
            username?: string;
            email?: string;
            phone?: string;
        };
    }): Promise<User>;
    findAll(): Promise<User[]>;
    create(createUserDto: CreateUserDto): Promise<User>;
    getUser(id: number): Promise<CreateUserDto>;
    login(userDto: UserDto): Promise<{
        access_token: string;
        id: number;
    }>;
    AddBalance(addBalance: AddBalanceDto): Promise<User>;
}
