import { Injectable } from '@nestjs/common'
import { CreateEdgeInput } from './dto/create-edge.input'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Edge } from 'src/db/entities/edge.entity'

function random() {
  const min = 1e4
  const max = 1e6
  // find a random number less than 1, multiply by 990,001)
  const random = Math.random() * (max - min + 1)
  // rounding down gives a range of 0 to 990,000
  // then add the min so we're always within range inclusive
  return Math.floor(random) + min
}

@Injectable()
export class EdgesService {
  constructor(
    @InjectRepository(Edge)
    private edgeRepo: Repository<Edge>
  ) {}

  async create(createEdgeInput: CreateEdgeInput): Promise<Edge> {
    const edge = await this.edgeRepo
      .create({
        capacity: random().toString(),
        ...createEdgeInput,
      })
      .save()
    console.log('Created new edge.', edge)
    return edge
  }

  async findAll(): Promise<Edge[]> {
    console.log('Fetching all edges from db.')
    return this.edgeRepo.find()
  }

  async findOne(id: string): Promise<Edge> {
    console.log(`Fetching edge id ${id} from db.`)
    return this.edgeRepo.findOneBy({ id })
  }
}