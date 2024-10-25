import { Injectable } from '@nestjs/common';
import { CreateEdgeInput } from './dto/create-edge.input';

@Injectable()
export class EdgesService {
  create(createEdgeInput: CreateEdgeInput) {
    return 'This action adds a new edge';
  }

  findAll() {
    return `This action returns all edges`;
  }

  findOne(id: string) {
    return `This action returns a #${id} edge`;
  }

  update(id: string, updateEdgeInput: UpdateEdgeInput) {
    return `This action updates a #${id} edge`;
  }

  remove(id: string) {
    return `This action removes a #${id} edge`;
  }
}
