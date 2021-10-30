import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUser } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get(":username")
  getUserByUsername(@Param('username') username) {
    return this.userService.getByUsername(username)
  }

  @Post()
  async createUser(@Body() createUser: CreateUser) {
    const user = await this.userService.create(createUser)
    return user
  }

  @Delete(':username')
  async deleteUser(@Param('username') username) {
    const deleteMessage = await this.userService.deleteByUsername(username)
    return deleteMessage
  }
}
