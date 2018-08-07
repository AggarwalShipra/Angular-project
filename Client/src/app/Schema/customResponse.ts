import { User } from "./userSchema";

export class CustomResponse{
    success:boolean;
    token:string;
    msg:string;
    user:User;
}