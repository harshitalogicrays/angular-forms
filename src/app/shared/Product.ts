export class Product{
    constructor(
        public name:string,
        public brand:string,  
        public price:string,
        public category:string,
        public stock:number,
        public image:string,
        public id?:string,
        public desc?:string
    ){}
}