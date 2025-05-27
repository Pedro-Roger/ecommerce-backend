/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';


import * as bcrypt from 'bcrypt';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async createUser (name:string, email:string, password:string) {
        const hashedPassword = await bcrypt.hash(password, 10);

        return this.prisma.user.create({
            data:{
                name,
                email,
                password: hashedPassword
            }
        })
    }

    async findByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: {
                email
            }
        })
    }
}
