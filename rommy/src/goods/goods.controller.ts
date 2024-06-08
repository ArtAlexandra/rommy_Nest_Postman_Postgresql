
import { GoodsDto } from './dto/goods.dto';
import { GoodsService } from './goods.service';
import { Controller, Header, HttpCode, HttpStatus, Body, Post, Get, Param, UseInterceptors, Request, UploadedFile, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { diskStorage } from 'multer';
import path = require('path');

export const storage = {
    // './uploads/profileimages'
    storage: diskStorage({
        destination: '../front/public/image/goods',
        filename: (req, file, cb) => {
            const filename: string = path.parse(file.originalname).name.replace(/\s/g, '');// + uuidv4();
            const extension: string = path.parse(file.originalname).ext;

            cb(null, `${filename}${extension}`)
        }
    })

}

@Controller('goods')
export class GoodsController {

    constructor(private goodsService: GoodsService){}

   
    @Post('/create')
    @UseInterceptors(FileInterceptor('file', storage))
    create(@Body() goodsDto :GoodsDto,@UploadedFile() file){
        return this.goodsService.create(goodsDto, file.originalname);
    }

   
 
    @Get('/get-all')
    getAll(){
        return this.goodsService.findAll();
    }
    @Get('/get-goods/:id_g')
    getShop(@Param('id_g') id_g:number){
        return this.goodsService.getGoodsId(id_g);
    }


    @Get('/get-goodsname/:name')
    getShops(@Param('name') name:string){
        return this.goodsService.getGoodsShop(name);
    }

    @Get('/get-goodsimages/:id_g')
    getShopsAll(@Param('id_g') id_g:number){
        return this.goodsService.getGoodsImages(id_g);
    }
    @Get('/sorttype/:id')
    getGoodsSortType(@Param('id') id:number){
        return this.goodsService.getGoodsSortType(id);
    }
    @Get('/sortprice/:id')
    getGoodsSortPrice(@Param('id') id:number){
        return this.goodsService.getGoodsSortPrice(id);
    }
    @Get('/get-goodsall')
    getGoodsAll(){
        return this.goodsService.getGoods();
    }

    @Get('/get-goodshopsid/:id')
    getGoodsShopId(@Param('id') id:number){
        return this.goodsService.getGoodsShopsId(id);
    }

    @Delete('/goods-delete/:id')
    geleteGoods(@Param('id') id:number){
        return this.goodsService.deleteGoods(id);
    }
}
