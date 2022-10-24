import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { Sequelize } from 'sequelize-typescript';

import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private sequelize: Sequelize
  ) { }


  // create(
  //   createUserDto: CreateUserDto,
  //   name: string,
  //   age: number,
  //   surname: string,
  //   email: string
  // ) {
  //   const id = Math.random().toString();
  //   // const newUser = new User(id, name, age, surname, email);
  //   const newUser = {
  //     id: 123,
  //     name: 'asdasd',
  //     age: 15,
  //     surname: 'asdasd',
  //     email: 'ad@gmail.com'
  //   }

  //   // this.userModel = newUser;
  //   return id;
  // }

  async create(): Promise<User> {
    const userData = {
      id: 123,
      name: 'asdasd',
      age: 15,
      surname: 'asdasd',
      email: 'ad@gmail.com'
    }
    const user = await this.userModel.create(userData);
    return user;
  }

  async createMany() {
    console.log('here');
    try {
      await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };

        await this.userModel.create(
          {
            id:103,
            name: 'asdasd',
            age: 15,
            surname: 'asdasd',
            email: 'ad@gmail.com'
          },
          transactionHost,
        );
        await this.userModel.create(
          {
            id:104,
            name: 'aaa',
            age: 17,
            surname: 'aaaa',
            email: 'aaaa@gmail.com'
          },
          transactionHost,
        );
        console.log(this.userModel);
      });
    } catch (err) {
      // Transaction has been rolled back
      // err is whatever rejected the promise chain returned to the transaction callback
      console.log('here error', err);
    }
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, name: string,age: number,surname:string,email: string) {
    let data = {
      'id':id,
      'name':name,
      'age': age,
      'surname': surname,
      'email': email
    }
    // await this.userModel.update({ id }, data);
    return await this.userModel.findOne({ 
      where: {
      id,
    }, });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

}



// import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

// import { User } from './entities/user.entity';
// import { InjectModel } from '@nestjs/sequelize';
// // import { User as UserModel } from './user.model';

// @Injectable()
// export class UsersService {

//   constructor(
//     @InjectModel(User)
//     private userModel: typeof User,
//   ) { }

//   // updating for creating user
//   // need to check adding this
//   private users: User[] = [];

//   create(
//     createUserDto: CreateUserDto,
//     name: string,
//     age: number,
//     surname: string,
//     email: string
//   ) {
//     const id = Math.random().toString();
//     const newUser = new User(id, name, age, surname, email);
//     this.users.push(newUser);
//     return id;
//   }

//   findAll() {
//     return this.userModel.findAll();
//     // return [...this.users];
//     // return `This action returns all users`;
//   }

//   findOne(id: string) {
//     // return `This action returns a #${id} user`;
//     return this.getUserById(id);
//   }

  

//   remove(id: string) {
//     const [targetUser, index] = this.getUserById(id);
//     this.users.splice(index, 1);
//   }

// }
