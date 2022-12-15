import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  //private readonly users: any[];

  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ){}

  findUserById(username: string) {
    return this.userRepo.findOne({
      where: { username }
    });
  }
}