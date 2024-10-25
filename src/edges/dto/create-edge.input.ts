import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateEdgeInput {
  @Field()
  nodeOneAlias: string

  @Field()
  nodeTwoAlias: string

  @Field()
  capacity: string
}
