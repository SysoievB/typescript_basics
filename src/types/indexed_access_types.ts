const appUser = {
  name: 'Max',
  age: 21,
  permissions: [{
      id: "p1", title: "Admin", description: "Admin accessed"
  }]
};

type AppUser = typeof appUser;

/*type AppUser = {
    name: string;
    age: number;
    permissions: {
        id:string;
        title: string;
        description: string;
    }[];
}*/

console.log(appUser);

type Perms = AppUser['permissions'];
type Perm = Perms[number];

const permissions = {
    id: "p1", title: "Admin", description: "Admin accessed"
};

console.log(permissions);