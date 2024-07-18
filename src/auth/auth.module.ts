import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'MinhaChaveSecretaDe32Caracteresss',
    }),
    PrismaModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
