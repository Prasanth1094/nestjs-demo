import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}
  isAuthenticated: boolean = false;
  login(email: string, password: string) {
    const user = this.usersService.users.find(
      (u) => u.email === email && u.password === password,
    );
    if (!user) {
    //   throw new Error('User not found');
     this.isAuthenticated = false;
    return "User not found";
    }
    if (user.password !== password) {
      throw new Error('Invalid password');
    }
    this.isAuthenticated = true;
    return user;
  }
}
