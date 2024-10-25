import { Test, TestingModule } from '@nestjs/testing'
import { EdgesResolver } from '../src/graphql/edges.resolver'
import { EdgesService } from '../src/graphql/edges.service'

describe('EdgesResolver', () => {
  let resolver: EdgesResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EdgesResolver, EdgesService],
    }).compile()

    resolver = module.get<EdgesResolver>(EdgesResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
