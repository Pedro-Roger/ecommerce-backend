import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AdminGuard } from './guards/admin.guard';

@Controller('admin')
export class AuthController {
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Get('dashboard')
  getDashboard(@Request() req) {
    return {
      message: 'Bem-vindo ao painel admin!',
      user: req.user,
    };
  }
}
