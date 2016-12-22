export class User {
    email: string;
    name: string;
    password?: string;
    roles: Role[];
    newPassword: string;
    newEmail:string;
}

export type Role = 'user' | 'admin';