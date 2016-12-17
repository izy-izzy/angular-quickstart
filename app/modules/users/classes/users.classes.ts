export class User {
    email: string;
    name: string;
    password?: string;
    roles: Role[];
}

export type Role = 'user' | 'admin';