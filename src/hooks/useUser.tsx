import { format } from 'date-fns'
import _ from 'lodash'
import { createContext, ReactNode, useContext, useState } from 'react'
import { User, UserForm, UserUpdate } from 'types/userTypes'
import { getStorageItem, setStorageItem } from '../utils/localStorage/index'

export interface UserProviderProps {
  children: ReactNode
}

export type UserProps = {
  users: User[]
  getUsersPaginated: (offset: number, amount?: number) => null | User[]
  validateUser: (email: string, password: string) => void
  getUserByEmail: (email: string) => User | null
  createUser: (user: UserForm) => void
  updateUser: (id: string, data: UserUpdate) => void
  deleteUser: (id: string) => void
  getAllUsers: () => User[]
}

export const UserContext = createContext<UserProps>({} as UserProps)

export function UserProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>(() => {
    const storagedUser = getStorageItem('users')

    //arrumando o carrinho que já vem sem amount

    if (storagedUser) {
      return storagedUser
    }

    return []
  })

  const getUsersPaginated = (offset: number, amount = 10) => {
    const AllUsers = getStorageItem('users')
    const usersTemp = []
    let cont = 0

    if (AllUsers === null) {
      return null
    }

    for (let i = offset; i < AllUsers?.length; i++) {
      cont < amount && usersTemp.push(AllUsers[i])
      cont += 1
    }

    return usersTemp
  }

  const getAllUsers = () => {
    const AllUsers = getStorageItem('users')

    if (AllUsers === null) {
      return null
    }

    return AllUsers
  }

  const validateUser = (email: string, password: string) => {
    const AllUsers: User[] = getStorageItem('users')

    if (AllUsers === null) {
      return null
    }

    const UserExist = AllUsers.find((userStored) => userStored.email === email)

    if (!UserExist) {
      return null
    }

    if (UserExist.password !== password) {
      return null
    }

    return UserExist
  }

  const getUserByEmail = (email: string) => {
    const AllUsers: User[] = getStorageItem('users')

    if (AllUsers === null) {
      return null
    }

    const UserExist = AllUsers.find((userStored) => userStored.email === email)

    if (!UserExist) {
      return null
    }

    return UserExist
  }

  const createUser = (user: UserForm) => {
    try {
      let newUsers = [...users]
      const UserExist = newUsers.find(
        (userStored) => userStored.email === user.email
      )
      if (UserExist) {
        return null
      } else {
        setUsers([
          ...users,
          {
            ...user,
            id: new Date().getTime().toString(16),
            activity: 'Ativo',
            created_at: format(new Date(), 'dd/MM/yyyy HH:mm').toString()
          }
        ])
        newUsers = [
          ...users,
          {
            ...user,
            id: new Date().getTime().toString(16),
            activity: 'Ativo',
            created_at: format(new Date(), 'dd/MM/yyyy HH:mm').toString()
          }
        ]
        setStorageItem('users', newUsers)
      }
    } catch (error) {
      console.log('error in creation: ', error)
    }
  }

  const deleteUser = (id: string) => {
    try {
      let newUsers = [...users]
      const UserExist = newUsers.find((userStored) => userStored.id === id)
      if (!UserExist) {
        return null
      } else {
        const newUsersDeleted = newUsers.filter(
          (userStored) => userStored.id !== id
        )
        setUsers(newUsersDeleted)
        newUsers = newUsersDeleted
        setStorageItem('users', newUsers)
      }
    } catch (error) {
      console.log('error in delete', error)
    }
  }

  const updateUser = (id: string, data: UserUpdate) => {
    console.log('esse eh o id: ', id)
    console.log('essa eh o dado: ', data)
    try {
      let newUsers = [...users]
      const UserToChange = newUsers.find((userStored) => userStored.id === id)
      if (!UserToChange) {
        return null
      } else {
        const newUserChanged: User = {
          cpf: data.cpf ?? UserToChange.cpf,
          email: data.email ?? UserToChange.email,
          id: UserToChange.id,
          name: data.name ?? UserToChange.name,
          password: data.password ?? UserToChange.password,
          profile: data.profile ?? UserToChange.profile,
          surname: data.surname ?? UserToChange.surname,
          activity: data.activity ?? UserToChange.activity,
          created_at: UserToChange.created_at
        }
        if (!_.isEqual(UserToChange, newUserChanged)) {
          const newUsersDeleted = newUsers.filter(
            (userStored) => userStored.id !== id
          )
          setUsers([...newUsersDeleted, newUserChanged])
          newUsers = [...newUsersDeleted, newUserChanged]
          setStorageItem('users', newUsers)
        }
      }
    } catch (error) {
      console.log('error in update: ', error)
    }
  }

  return (
    <UserContext.Provider
      value={{
        getAllUsers,
        getUserByEmail,
        users,
        getUsersPaginated,
        createUser,
        deleteUser,
        updateUser,
        validateUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser(): UserProps {
  const context = useContext(UserContext)

  return context
}
