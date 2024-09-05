export class User{
    constructor(public name:string,
        public email:string,  
        public mobile:string,
        public password:string,
        public cpassword:string,
        public dob?:string,
        public gender?:string,){}
}