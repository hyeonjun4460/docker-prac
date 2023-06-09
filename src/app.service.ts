import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `hello ${process.env.WORD}`;
  }
}
