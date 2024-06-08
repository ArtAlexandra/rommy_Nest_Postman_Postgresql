
import { Body, Controller, Get, Post, UseGuards, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { AddBalanceDto } from './dto/addBalance.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

   
    @Post('/signin')
    create(@Body() userDto: CreateUserDto){
        return this.usersService.create(userDto);
    }

   
    //@UseGuards(JwtAuthGuard)
    @Get('/get-all')
    getAll(){
        return this.usersService.findAll();
    }
    @Get('/get-user/:id')
    getUser(@Param('id') id:number){
        return this.usersService.getUser(id);
    }

    @Post('/login')
    Login(@Body() userDto: UserDto){
        console.log(userDto)
        return this.usersService.login(userDto)
    }

    @Patch('/add-balance')
    AddBalance(@Body() addBalance:AddBalanceDto){
        return this.usersService.AddBalance(addBalance);
    }
}
