import { Injectable } from '@nestjs/common';
import { Cat } from '../interfaces/cat.interface';
import { ListAllEntities } from '../dtos/list-all-entities.dto';
@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  create(cat: Cat): void {
    this.cats.push(cat);
  }

  findAll(query: ListAllEntities): Cat[] {
    const { page, limit } = query;
    const start = (page - 1) * limit;
    const end = start + limit;
    return this.cats.slice(start, end);
  }
}
