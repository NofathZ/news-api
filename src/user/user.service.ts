import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async create(user) {
    const userRepo = this.userRepository.create(user)
    await this.userRepository.save(userRepo)
    return userRepo
  }

  async getByUsername(username) {
    return await this.userRepository.find({ username })
  }

  async deleteByUsername(username) {
    await this.userRepository.delete({ username })
    return {
      message: "delete success"
    }
  }
}
