import { Controller, Post, Body } from '@nestjs/common';
import { CreateEntityDto } from './dto/createEntity.dto';

@Controller('entity')
export class EntityController {
  constructor() {}

  @Post()
  createEntity(@Body() createEntityDto: CreateEntityDto): string {
    const { entityType } = createEntityDto;
    return '1';
  }
}
