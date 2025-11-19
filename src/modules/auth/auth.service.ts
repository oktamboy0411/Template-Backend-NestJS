import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  login(_dto: LoginDto) {
    return { accessToken: 'fake-token', tokenType: 'Bearer' };
  }

  register(dto: RegisterDto) {
    return { id: Date.now().toString(), name: dto.name, email: dto.email };
  }
}
