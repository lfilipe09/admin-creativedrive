export interface User {
  id: string
  name: string
  surname: string
  cpf: string
  profile?: 'Administrador' | 'Usuário'
  email: string
  password: string
}

export type UserForm = Omit<User, 'id'>

export type UserValidation = Omit<User, 'id' | 'profile'>
