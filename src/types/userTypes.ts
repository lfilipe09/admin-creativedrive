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
  activity: 'Ativo' | 'Inativo'
  created_at: string
}

export interface UserUpdate {
  name?: string
  surname?: string
  cpf?: string
  profile?: 'Administrador' | 'Usuário'
  email?: string
  password?: string
  activity?: 'Ativo' | 'Inativo'
  created_at?: string
}

export type UserForm = Omit<User, 'id' | 'activity' | 'created_at'>

export type UserFormSignIn = Omit<
  UserForm,
  'name' | 'surname' | 'cpf' | 'profile' | 'activity' | 'created_at'
>
