class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`)
    }

    static crtId() {     //static avoids giving accses to the object instantiated by the class
        return 123;
    }
}

const Amrit = new User("Amritansh singh");
Amrit.logMe();
//console.log(Amrit.crtId()); //gives error that crtId is not a function
