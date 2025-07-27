interface Authenticatable {
    email: string;
    password: string;

    login(): void;

    logout(): void;
}

interface AuthenticatableAdmin extends Authenticatable {
    role: 'admin' | 'superadmin';
}

let user10: Authenticatable;

user10 = {
    email: 'test@email.com',
    password: '1232',
    login() {
        console.log("Login.....")
    },
    logout() {
        console.log("Logout.....")
    }
}

/*type Authenticatable = {
    email: string;
    password: string;

    login(): void;
    logout(): void;
}
type UserResponse = Authenticatable | null;
*/

class AuthenticatableUser implements Authenticatable {
    constructor(public email: string, public password: string) {

    }

    login(): void {
        console.log("Login.....")
    }

    logout(): void {
        console.log("Logout.....")
    }
}