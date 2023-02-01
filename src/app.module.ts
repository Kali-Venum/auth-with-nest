import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Custom Imports.
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/auth-with-nest'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
