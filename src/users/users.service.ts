import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async create(userData: Partial<User>): Promise<User> {
    const newUser: User = {
      id: new Date().getTime().toString(), // Temporary ID generation
      email: userData.email || 'defaultEmail@example.com',
      password: userData.password || 'defaultPassword',
    };
    this.users.push(newUser);
    return newUser;
  }

  async findOne(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}
