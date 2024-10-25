import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class Edge {
  @Field(() => ID)
  id: string

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;

  @Field()
  capacity: string;

  @Field()
  nodeOneAlias: string;

  @Field()
  nodeTwoAlias: string;

}