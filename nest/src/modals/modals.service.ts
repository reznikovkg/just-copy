import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateModalDto } from './dto/create-modal.dto';
import { Low } from 'lowdb';
import { Modal } from './entities/modal.entity';
import { LOWDB, MODALS_DB_NAME, UNEXIST_MODAL_POP_MSG } from '../constants';

@Injectable()
export class ModalsService {
  constructor(@Inject(LOWDB) private readonly lowdbRepository: Low<Modal[]>) {}

  create(createModalDto: CreateModalDto): Modal {
    this.lowdbRepository.get(MODALS_DB_NAME).push(createModalDto).write();
    return createModalDto;
  }

  findAll(): Modal[] {
    return this.lowdbRepository.get(MODALS_DB_NAME);
  }

  removeTop(): Modal {
    const deleted = this.lowdbRepository.get(MODALS_DB_NAME).pop().write();
    if (!deleted) {
      throw new BadRequestException(UNEXIST_MODAL_POP_MSG);
    }

    return deleted;
  }
}
