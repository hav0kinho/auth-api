import { PartialType } from '@nestjs/mapped-types';
import { BookCreateDTO } from './book-create.dto';

export class BookPatchDTO extends PartialType(BookCreateDTO) {}
