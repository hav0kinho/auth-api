import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Oque ele importa?
  controllers: [BookController], // Quais são os controllers?
  providers: [BookService], // Oque ele provê para os Controllers?
  exports: [BookService], // Quais Services ele exporta?
})
export class BookModule {}
