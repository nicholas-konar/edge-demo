import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql'
import { EdgesService } from './edges.service'
import { Edge } from './entities/edge.entity'
import { CreateEdgeInput } from './dto/create-edge.input'

@Resolver(() => Edge)
export class EdgesResolver {
  constructor(private readonly edgesService: EdgesService) {}

  @Mutation(() => Edge)
  createEdge(
    @Args('createEdgeInput')
    createEdgeInput: CreateEdgeInput
  ) {
    return this.edgesService.create(createEdgeInput)
  }

  @Query(() => [Edge], {
    name: 'edges',
  })
  findAll() {
    return this.edgesService.findAll()
  }

  @Query(() => Edge, { name: 'edge' })
  findOne(
    @Args('id', { type: () => ID })
    id: string
  ) {
    return this.edgesService.findOne(id)
  }
}
