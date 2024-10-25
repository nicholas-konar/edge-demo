import { ObjectType, Field, ID, Int, GraphQLISODateTime } from '@nestjs/graphql'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm'

// Uses decorators for both typeorm & graphql

@Entity()
@ObjectType()
export class Edge extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string

  @Column()
  @Field()
  capacity: string

  @Column({ unique: true })
  @Field()
  node1_alias: string

  @Column({ unique: true })
  @Field()
  node2_alias: string

  @CreateDateColumn({ type: 'timestamptz' })
  @Field(() => GraphQLISODateTime)
  created_at: Date

  @UpdateDateColumn({ type: 'timestamptz' })
  @Field(() => GraphQLISODateTime, { nullable: true })
  updated_at: Date

  @Field()
  get edge_peers(): string {
    return `${this.node1_alias}-${this.node2_alias}`
  }
}
