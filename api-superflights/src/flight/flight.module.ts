import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Flight } from 'src/common/models';
import { PassengerModule } from 'src/passenger/passenger.module';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { FlightSchema } from './schema/flight.schema';

@Module({
  imports: [ 
    MongooseModule.forFeatureAsync([
      {
        name: Flight.name,
        useFactory: () => FlightSchema.plugin(require('mongoose-autopopulate'))
      }
    ]),
    PassengerModule
   ],
  controllers: [FlightController],
  providers: [FlightService]
})
export class FlightModule {}
