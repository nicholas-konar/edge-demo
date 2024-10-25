import { Injectable } from '@nestjs/common'
import { CreateEdgeInput } from './dto/create-edge.input'

function random() {
  const min = 1e4
  const max = 1e6
  // find a random number less than 1, multiply by 990,001)
  const random =
    Math.random() * (max - min + 1)
  // rounding down gives a range of 0 to 990,000, then add the min so we're within range
  return Math.floor(random) + min
}

@Injectable()
export class EdgesService {
  create(
    createEdgeInput: CreateEdgeInput
  ) {
    console.log(
      'Creating new edge in db.'
    )
    return 'This action adds a new edge'
  }

  findAll() {
    console.log(
      'Fetching all edges from db.'
    )
    return [
      {
        id: '123',
        capacity: random(),
        nodeOneAlias: 'test1',
        nodeTwoAlias: 'test2',
      },
      {
        id: '456',
        capacity: random(),
        nodeOneAlias: 'test3',
        nodeTwoAlias: 'test4',
      },
    ]
  }

  findOne(id: string) {
    console.log(
      `Fetching edge id ${id} from db.`
    )
    return `This action returns a #${id} edge`
  }
}
