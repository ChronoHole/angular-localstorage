export interface User {
  id: string;
  username: string;
  role: Role;
}

export interface UserEntity {
  Users: User[];
}

export type AllowUserTypes = UserEntity | User[] | User;

type Role = 'admin' | 'user';
