import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [] as Array<{ id: string; name?: string; email?: string }>;

  create(dto: CreateUserDto) {
    const id = (this.users.length + 1).toString();
    const user = { id, ...dto };
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((u) => u.id === id) ?? null;
  }

  update(id: string, dto: UpdateUserDto) {
    const idx = this.users.findIndex((u) => u.id === id);
    if (idx === -1) return null;
    this.users[idx] = { ...this.users[idx], ...dto };
    return this.users[idx];
  }

  remove(id: string) {
    const before = this.users.length;
    this.users = this.users.filter((u) => u.id !== id);
    return { removed: before !== this.users.length };
  }
}
