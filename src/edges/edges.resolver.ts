import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql'
import { EdgesService } from './edges.service'
// import { EdgeObject } from './entities/edge.entity'
import { CreateEdgeInput } from './dto/create-edge.input'
import { Edge } from 'src/db/entities/edge.entity'

@Resolver(() => Edge)
export class EdgesResolver {
  constructor(private readonly edgesService: EdgesService) {}

  @Mutation(() => Edge)
  async createEdge(
    @Args('createEdgeInput')
    createEdgeInput: CreateEdgeInput
  ) {
    return this.edgesService.create(createEdgeInput)
  }

  @Query(() => Edge, { name: 'edge' })
  async findOne(
    @Args('id', { type: () => ID })
    id: string
  ) {
    return this.edgesService.findOne(id)
  }

  @Query(() => [Edge], { name: 'edges' })
  async findAll() {
    return this.edgesService.findAll()
  }
}
