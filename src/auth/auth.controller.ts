/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('admin')
export class AuthController {
  @UseGuards(JwtAuthGuard)
  @Get('dashboard')
  getDashboard(@Request() req) {
    if (!req.user.isAdmin) {
      return { message: 'Acesso negado. Você não é admin.' };
    }

    return { message: 'Bem-vindo ao painel admin!', user: req.user };
  }
}
