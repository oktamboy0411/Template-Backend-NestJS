import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { log } from 'console';

@Injectable()
export class AuthService {
  login(dto: LoginDto) {
    log(dto);
    return { accessToken: 'fake-token', tokenType: 'Bearer' };
  }

  register(dto: RegisterDto) {
    return { id: Date.now().toString(), name: dto.name, email: dto.email };
  }
}
