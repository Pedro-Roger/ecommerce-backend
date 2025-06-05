import { Injectable, ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto) {
  
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new ConflictException('Usuário com este e-mail já existe');
    }

   
    const hashedPassword = await bcrypt.hash(data.password, 10);

  
    const newUser = await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        isAdmin: data.isAdmin || false,
      },
     
      select: {
        id: true,
        email: true,
        name: true,
        isAdmin: true,
       
      },
    });
    return newUser;
  }

  async findByEmail(email: string) {

    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}
