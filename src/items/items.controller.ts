import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemStatus } from './item.status.enum';
import { Item } from './item.model';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Post()
  create(
    @Body('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string,
  ): Item {
    const item: Item = {
      id: id,
      name: name,
      price: price,
      description: description,
      status: ItemStatus.ON_SALE,
    };
    return this.itemsService.create(item);
  }
}
