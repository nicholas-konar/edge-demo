import { Injectable, OnModuleInit } from '@nestjs/common'
import { Channel, Connection, connect } from 'amqplib'
import { Edge } from 'src/edges/entities/edge.entity'

@Injectable()
export class RabbitmqService implements OnModuleInit {
  private channel: Channel
  private connection: Connection
  private queueName = 'queue'

  async onModuleInit() {
    try {
      this.connection = await connect('amqp://rabbitmq:5672')
      this.channel = await this.connection.createChannel()
      await this.channel.assertQueue(this.queueName)
      await this.channel.consume(this.queueName, this.handleEdge.bind(this))
      console.log('RabbitMQ initialized.')
    } catch (e) {
      console.error('Failed to establish RabbitMQ connection due to', e)
    }
  }

  async publishEdge(data: any) {
    try {
      const buffer = Buffer.from(JSON.stringify(data))
      this.channel.sendToQueue(this.queueName, buffer)
      console.log('Published edge to RabbitMQ.')
    } catch (e) {
      console.error('Failed to publish edge due to', e)
    }
  }

  private async handleEdge(msg: any) {
    if (!msg) return
    try {
      const data = JSON.parse(msg.content.toString())
      const edge = await Edge.findOneByOrFail({ id: data.id })
      console.log(
        `New channel between ${edge.node1_alias} and ${edge.node2_alias} with a capacity of ${edge.capacity} has been created.`
      )
      edge.node1_alias += '-updated'
      edge.node2_alias += '-updated'
      await edge.save()
      this.channel.ack(msg)
    } catch (e) {
      console.error('Failed to handle edge in RabbitMQ due to', e)
    }
  }
}
