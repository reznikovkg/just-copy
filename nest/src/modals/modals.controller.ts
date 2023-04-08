import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ModalsService } from './modals.service';
import { CreateModalDto } from './dto/create-modal.dto';

@Controller('modals')
export class ModalsController {
  constructor(private readonly modalsService: ModalsService) {}

  @Post()
  create(@Body() createModalDto: CreateModalDto) {
    return this.modalsService.create(createModalDto);
  }

  @Get()
  findAll() {
    return this.modalsService.findAll();
  }

  @Delete()
  removeTop() {
    return this.modalsService.removeTop();
  }
}
