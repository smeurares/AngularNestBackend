import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.DATA_BASE), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
