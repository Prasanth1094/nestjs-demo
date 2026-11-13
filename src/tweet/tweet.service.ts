import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class TweetService {
    constructor(private readonly usersService: UsersService) {}
    tweets:{text:string,userId:number,date:Date}[] = [
        {text:'Hello, world!',userId:1,date:new Date("2026-11-01")},
        {text:'Nice to meet you!',userId:2,date:new Date("2023-10-02")}
    ]

    getTweets(userId: number){
        const user = this.usersService.getUserById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        const userTweets = this.tweets.filter(tweet => tweet.userId === userId);
        const response= userTweets.map((tweet) => ({
            text: tweet.text,
            date: tweet.date,
            name:user.name
        }));
        return response;
    }
}
