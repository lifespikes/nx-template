import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from '@app/app/auth/entity/auth.entity';

@Injectable()
export class AuthService {
  constructor(
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
