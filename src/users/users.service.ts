import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>){}

  create(createUserDto: CreateUserDto) {
    const user = new User();
    user.name = createUserDto.name;
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.email = createUserDto.email;
    user.role = createUserDto.role;
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(username: string) { 
    return this.userRepository.findOneBy({ username });
  }
}
