import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class UsersService {
    constructor( @Inject(forwardRef(() => AuthService)) private readonly authService: AuthService) {}
    users:{id:number,name:string,email:string,age:number,gender:string,password:string}[] = [
        {id:1,name:'Prasanth',email:'prasanth@example.com',age:30,gender:'Male',password:'password1'},
        {id:2,name:'Poorani',email:'poorani@example.com',age:25,gender:'Female',password:'password2'},
        {id:3,name:'John Doe',email:'johndoe@example.com',age:35,gender:'Male',password:'password3'}
    ]

    getAllUsers(){
        if(!this.authService.isAuthenticated){
            throw new Error('Unauthorized');
        }
        return this.users;
    }
    getUserById(id:number){
        return this.users.find(user => user.id === id);
    }
    createUser(user:{id:number,name:string,email:string,age:number,gender:string,password:string}){
        this.users.push(user);
        return user;
    }
}