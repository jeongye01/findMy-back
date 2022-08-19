import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {
    this.users = [];
  }

  create(user) {
    this.users.push(user);
  }

  findAll() {
    return this.users;
  }
}
