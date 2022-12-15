import { IsOptional, IsString, } from "class-validator"

export class CreateUserDto {
  @IsOptional()
  id? : number

  @IsString()
  username: string

  @IsString()
  password: string

  @IsString()
  biodata: string

  @IsString()
  name: string

  @IsString()
  image: string

  @IsString()
  pic_id: number
}