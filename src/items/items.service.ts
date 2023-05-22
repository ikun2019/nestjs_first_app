import { Injectable } from '@nestjs/common';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
  // Item型の配列を作成
  private items: Item[] = [];

  // 配列を返却
  findAll(): Item[] {
    return this.items;
  }

  // 配列にpush
  create(item: Item): Item {
    this.items.push(item);
    return item;
  }
}
