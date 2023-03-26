import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/common/models';
import { UserSchema } from './schema/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [ 
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          return UserSchema
        }
      }
    ])
   ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
