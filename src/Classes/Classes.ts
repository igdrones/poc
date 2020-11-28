export class GeoCordinates{
    constructor(
        public latitude:string="",
        public longitude:string=""
        ){}
}

export class UserCompany{
    constructor(
        public name:string="",
        public catchPhrase:string="",
        public bs:string=""
        ){}
}

export class UserAddress{
    constructor(
        public street:string="",
        public building:string="",
        public city:string="",
        public zipcode:string="",
        public geoCordinates:GeoCordinates=new GeoCordinates()
        ){}
}

export class User{
    constructor(
        public id:number,
        public name:string,
        public username:string,
        public email:string,
        public phone:string,
        public website:string,
        public fulladdress:string="",
        public address:UserAddress=new UserAddress(),
        public company:UserCompany=new UserCompany(),
        ){}
}

export class Poc_User{
    constructor(
        public id:string,
        public firstname:string,
        public lastname:string,
        public phone:string,
        ){}
}

