import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, GetUserParamsDto, UpdateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // @Get()
  // getUsers(
  //   @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  //   @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  // ) {
  //   // if (query.gender) {
  //   //     return usersService.getAllUsers().filter(user => user.gender.toLowerCase() === query.gender.toLowerCase());
  //   // }
  //   return this.usersService.getAllUsers();
  // }
  @Get() 
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param() param: GetUserParamsDto) {}

  @Post()
  createUser(@Body() newUser: CreateUserDto) {
    return this.usersService.createUser(newUser);
    // return 'User created successfully';
  }
  @Patch()
  updateUser(@Body() user: UpdateUserDto) {
    //    return usersService.createUser(newUser);
    return 'User updated successfully';
  }
}
