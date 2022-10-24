// import { Module } from '@nestjs/common';
// import { SequelizeModule } from '@nestjs/sequelize';
// // import { User } from './user.entity';
// import { User } from './user.model';

// @Module({
//   imports: [SequelizeModule.forFeature([User])],
//   exports: [SequelizeModule]
// })
// export class UsersModule {}


import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [SequelizeModule],
})
export class UsersModule { }
