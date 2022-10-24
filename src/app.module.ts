import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UserHttpModule } from './users/users-http.module';

import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/user.model';

@Module({
  // imports: [UsersModule],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      models: [User],
      // autoLoadModels: true,
      // synchronize: true,
    }),
    UsersModule
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule { }
