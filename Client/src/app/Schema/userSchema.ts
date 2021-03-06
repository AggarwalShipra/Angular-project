export class User
{
    _id?:string;
    first_name:string;
    last_name:string;
    email:string;
    password:string;
    address:{
        area:string,
        city:string,
        state:string,
        pincode:number
    };
    bought:string;
    interestedIn:string;
    valid:boolean;
}