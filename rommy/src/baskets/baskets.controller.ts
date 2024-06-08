import { FileInterceptor } from '@nestjs/platform-express';
import { Controller, Header, HttpCode, HttpStatus, Body, Post, Get, Param, UseInterceptors, UploadedFiles, UploadedFile, Delete } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { CreateBasketDto } from './dto/create-baskets.dto';


@Controller('baskets')
export class BasketsController {

    constructor(private readonly basketService: BasketsService){}


    @Post('/create-basket')
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-type', 'application/json')
    createBasket(@Body() createBasketDto :CreateBasketDto){
        
        return this.basketService.create(createBasketDto);
    }

   
    @Delete('/delete/:id')
    removeOne(@Param('id') id:number){
        return this.basketService.remove(id);
    }
   
    @Get(`/getall-basket`)
    getAllBaskets() {
      return this.basketService.findAll()
    }

    @Get('/basket-user/:id')
    getBasketUser(@Param('id') id:number){
        return this.basketService.getBasketUser(id);
    }
    @Post('/buybasket/:id')
    buyBasket(@Param('id') id:number){
        return this.basketService.buyGoods(id);
    }


    
}