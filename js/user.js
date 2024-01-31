class user{
    #userid;
    #password;
    #email;
    constructor(userid,password,email){
        this.#userid=userid;
        this.#password=password;
        this.#email=email;
    }
    get userid(){
return this.#userid
    }
    get password(){
        return this.#password
    }
    get email(){
        return this.#email
    }
    set userid(userid){
        this.#userid=userid;
    }
    set password(password){
        this.#password=password
    }
    set email(email){
        this.#email=email
    }

    display(){
        return`${this.#userid} ${this.#password} ${this.#email}`
    }
}

let user1=new user('abc','123','sk@gmail.com');
console.log(user1.display())
console.log(user1.userid)
user.password="drf"
console.log(user1.display())
user1.userid='aooeire';
console.log(user1.display());
