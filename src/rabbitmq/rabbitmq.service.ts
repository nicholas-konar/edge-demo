import { Injectable, OnModuleInit } from '@nestjs/common'
import { Channel, Connection, connect } from 'amqplib'

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
      console.error('Failed to establish RabbitMQ connection\n', e)
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
    const edge = msg.content.toString()
    this.channel.ack(msg)
    console.log('Handler triggered', msg, edge)
  }
}
