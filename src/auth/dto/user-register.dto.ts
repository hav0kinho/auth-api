import { IsNotEmpty, IsStrongPassword, MinLength } from 'class-validator';

export class UserRegisterDTO {
  @IsNotEmpty()
  @MinLength(6)
  username: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
