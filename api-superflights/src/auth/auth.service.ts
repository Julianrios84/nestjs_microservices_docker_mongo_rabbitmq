import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDataTransferObject } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
    ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUsername(username)
    const isvalid = await this.userService.checkPassword(password, user.password)
    if(user && isvalid) return user
    return null;
  }


  async signIn(user: any) {
    const payload = { username: user.username, sub: user._id }
    return { access_token: this.jwtService.sign(payload) }
  }

  async signUp(user: UserDataTransferObject) {
    return this.userService.create(user);
  }

}
