import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsDate, IsNotEmpty, IsString } from "class-validator"

export class FlightDataTransferObject {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly pilot: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly airplane: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly destination: string

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  readonly flightDate: Date
}