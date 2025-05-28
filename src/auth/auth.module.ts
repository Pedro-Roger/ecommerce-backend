import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [PassportModule, JwtModule.register({
        secret: process.env.JWT_SECRET || 'segredo_super_secreto',
        signOptions: { expiresIn: '1d' },
  }),
  controllers: [AuthController],
        providers: [AuthService, PrismaService, UserService, JwtStrategy],
  export: [AuthService]
})
export class AuthModule {}
