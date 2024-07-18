import { IsDateString, IsNotEmpty } from 'class-validator';

export class BookCreateDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  @IsDateString()
  publishedDate: Date;
}
