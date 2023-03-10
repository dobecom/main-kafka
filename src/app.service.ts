import { Inject, Injectable } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { LockEvent } from "./events/lock.event";

@Injectable()
export class AppService {
  constructor(@Inject("seat") private readonly clientKafka: ClientKafka) {}

  async getHello() {
    const result = await this.clientKafka.emit("lock", new LockEvent());
    console.log(result);
    return result;
  }
}
