import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Edge {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
