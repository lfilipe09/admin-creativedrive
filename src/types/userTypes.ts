export interface Users {
  users: User[]
  offset: number
}

export interface User {
  id: string
  name: string
  surname: string
  cpf: string
  profile: 'Administrador' | 'Usuário'
  email: string
  password: string
}

export interface UserUpdate {
  name?: string
  surname?: string
  cpf?: string
  profile?: 'Administrador' | 'Usuário'
  email?: string
  password?: string
}

export type UserForm = Omit<User, 'id'>

export type UserFormSignIn = Omit<
  UserForm,
  'name' | 'surname' | 'cpf' | 'profile'
>
