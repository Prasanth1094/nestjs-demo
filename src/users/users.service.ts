import {  Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dto/user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User> ) {}
    

    getAllUsers(){
        return this.usersRepository.find();
    }
   
    public async createUser(userDto:CreateUserDto){
        const user = await this.usersRepository.findOne({ where: { email: userDto.email } });
        if (user) {
            throw new Error("User already exists");
        }
        const newUser = this.usersRepository.create(userDto);
        return await this.usersRepository.save(newUser);
       
    }
}