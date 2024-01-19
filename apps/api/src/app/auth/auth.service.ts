import { Inject, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from '@app/app/auth/entity/auth.entity';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AuthService {
  constructor(
    @Inject('PrismaService')
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Promise<AuthEntity> {
    const user = await this.prisma.user.findUnique({ where: { email: email } });

    if (!user) {
      throw new UnprocessableEntityException(
        'The provided credentials are incorrect.',
      );
    }

    const isPasswordValid = user.password === password;

    if (!isPasswordValid) {
      throw new UnprocessableEntityException(
        'The provided credentials are incorrect.',
      );
    }

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }
}
