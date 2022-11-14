import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './user/user.models';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://nestjsmongodb:65qRiFLB6JNFT1zd@cluster0.ofyg1zv.mongodb.net/?retryWrites=true&w=majority`,
    ),
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
