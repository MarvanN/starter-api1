import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  // @Post()
  // create(
  //   @Body('name') name: string,
  //   @Body('age') age: number,
  //   @Body('surname') surname: string,
  //   @Body('email') email: string,
  //   createUserDto: CreateUserDto
  // ) {
  //   const userID = this.usersService.create(createUserDto, name, age, surname, email);
  //   return {
  //     id: userID
  //   }
  // }

  @Post()
  create() 
  {
    const userID = this.usersService.createMany();
    console.log('herre');
    return {
      id: userID
    }
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('surname') surname: string,
    @Body('email') email: string,
    updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, name,age,surname,email);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
