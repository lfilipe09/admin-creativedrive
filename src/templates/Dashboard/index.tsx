import {
  MinusCircle,
  PlusCircle,
  Search,
  User,
  Users
} from '@styled-icons/feather'
import Button from 'components/Button'
import { Container } from 'components/Container'
import ContentWrapper from 'components/ContentWrapper'
import DashboardData from 'components/DashboardData'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import Menu from 'components/Menu'
import { menuItems } from 'components/Menu/menuItems.fixtures'
import Pagination from 'components/Pagination'
import Table, { TableColumn } from 'components/Table'
import TextField from 'components/TextField'
import UserCard, { UserCardProps } from 'components/UserCard'
import { useAuth } from 'hooks/useAuth'
import { useUser } from 'hooks/useUser'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { User as UserType } from 'types/userTypes'

import * as S from './styles'

export type UsersTypeNumber = {
  actives: number
  admin: number
  inactive: number
}

export type UsersPaginated = {
  desktop: TableColumn[]
  mobile: UserCardProps[]
}

const DashboardTemplate = () => {
  const {
    getAllUsers,
    getUsersPaginated,
    getUserByEmail,
    deleteUser,
    updateUser
  } = useUser()
  const { validateAuth } = useAuth()
  const [usersTypeAmount, setUsersTypeAmount] = useState<UsersTypeNumber>()
  const [allUsersData, setAllUsersData] = useState<UserType[]>()
  const [usersPaginatedState, setUsersPaginatedState] =
    useState<UsersPaginated>()
  const routes = useRouter()
  const { push } = routes

  function handleDashboardDataValues(usersData: UserType[]) {
    const usersTypeAmountTemp = {
      actives: 0,
      admin: 0,
      inactive: 0
    }
    usersData?.map((userData) => {
      if (userData.activity === 'Ativo') {
        usersTypeAmountTemp['actives'] = usersTypeAmountTemp.actives + 1
      } else if (userData.activity === 'Inativo') {
        usersTypeAmountTemp['inactive'] = usersTypeAmountTemp.inactive + 1
      }
      if (userData.profile === 'Administrador') {
        usersTypeAmountTemp['admin'] = usersTypeAmountTemp.admin + 1
      }
    })
    setUsersTypeAmount(usersTypeAmountTemp)
  }

  function handlePaginationDataValues(usersPaginated: UserType[]) {
    const creation_Dates: string[] = []
    const profilesPics: JSX.Element[] = []
    const names: string[] = []
    const emails: string[] = []
    const activities: string[] = []

    usersPaginated.map((user) => {
      creation_Dates.push(user.created_at)
      profilesPics.push(<User size={'1rem'} key={''} />)
      names.push(user.name)
      emails.push(user.email)
      activities.push(user.activity)
    })
    const DesktopTable: TableColumn[] = [
      { 'Criado em:': creation_Dates },
      { foto: profilesPics },
      { name: names },
      { email: emails },
      { activity: activities }
    ]

    const MobileCard: UserCardProps[] = []
    usersPaginated.map((user) => {
      MobileCard.push({
        name: user.name,
        creationDate: user.created_at,
        activity: user.activity,
        email: user.email,
        role: user.profile,
        onDeleteData: () => {
          console.log('deeltar')
        },
        onEditData: () => {
          console.log('editar')
        }
      })
    })

    setUsersPaginatedState({
      desktop: DesktopTable,
      mobile: usersPaginatedState
        ? [...usersPaginatedState.mobile, ...MobileCard]
        : MobileCard
    })
  }

  useEffect(() => {
    const usersData = getAllUsers()
    setAllUsersData(usersData)
    handleDashboardDataValues(usersData)
    const usersPaginated = getUsersPaginated(0, 5)
    usersPaginated && handlePaginationDataValues(usersPaginated)
    const session = validateAuth()
    !session && push('/login')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.WrapperImg>
      <S.Wrapper>
        <Container>
          <S.MenuWrapper>
            <MediaMatch lessThan={'medium'}>
              <S.Logo src={'/img/creativedrive.png'} />
            </MediaMatch>
            <Menu
              menuItems={menuItems}
              logoImageUrl={'/img/creativedrive.png'}
            />
          </S.MenuWrapper>
          <S.DashboardsWrapper>
            <MediaMatch lessThan={'medium'}>
              <Heading title="Dashboard" />
            </MediaMatch>
            <S.IndicatiorsWrapper>
              <ContentWrapper
                title="Dashboard"
                topIcon={<User size={'1.5rem'} />}
                size={'small'}
                RedirectUrlRightButton={'/users'}
              >
                <DashboardData
                  dataNumber={usersTypeAmount?.actives}
                  title={
                    usersTypeAmount?.actives === 1
                      ? 'Colaborador'
                      : 'Colaboradores'
                  }
                  isActive={true}
                  icon={<Users strokeWidth={1} width={'1.2rem'} />}
                />
              </ContentWrapper>
              <ContentWrapper
                topIcon={<User size={'1.5rem'} />}
                size={'small'}
                RedirectUrlRightButton={'/users'}
              >
                <DashboardData
                  dataNumber={usersTypeAmount?.admin}
                  title={
                    usersTypeAmount?.admin === 1
                      ? 'Administrador'
                      : 'Administradores'
                  }
                  isActive={true}
                  icon={<Users strokeWidth={1} width={'1.2rem'} />}
                />
              </ContentWrapper>
              <ContentWrapper
                topIcon={<User size={'1.5rem'} />}
                size={'small'}
                RedirectUrlRightButton={'/users'}
              >
                <DashboardData
                  dataNumber={usersTypeAmount?.inactive}
                  title={
                    usersTypeAmount?.inactive === 1
                      ? 'Perfil inativo'
                      : 'Perfis inativos'
                  }
                  isActive={false}
                  icon={<MinusCircle strokeWidth={1} width={'1.2rem'} />}
                />
              </ContentWrapper>
            </S.IndicatiorsWrapper>
            <MediaMatch greaterThan={'medium'}>
              <ContentWrapper
                title={'Usuários da plataforma'}
                rightButtonText={'Gerenciar usuarios'}
                RedirectUrlRightButton={'/users'}
              >
                <div style={{ padding: '0.5rem 2rem', width: '100%' }}>
                  <S.ButtonTableGroup>
                    <TextField
                      icon={<Search size={'1rem'} strokeWidth={2} />}
                      placeholder={'Buscar usuários'}
                      inputHeight={'small'}
                      minimal={true}
                      outsideIcon={true}
                    />
                    <Link href={'/criar-usuario'} passHref>
                      <Button
                        as="a"
                        icon={<PlusCircle size={'1rem'} strokeWidth={2} />}
                      >
                        criar um novo usuario
                      </Button>
                    </Link>
                  </S.ButtonTableGroup>
                  <Table
                    data={
                      usersPaginatedState?.desktop
                        ? usersPaginatedState.desktop
                        : []
                    }
                    isEditable={true}
                    editableFields={['name', 'activity']}
                    OnDeleteLine={(email) => {
                      const userToDelete = getUserByEmail(email)
                      new Promise((res) => {
                        res(userToDelete && deleteUser(userToDelete.id))
                      }).then(() => {
                        const usersData = getAllUsers()
                        handleDashboardDataValues(usersData)
                      })
                    }}
                    onChangeLine={(email, data) => {
                      const userToUpdate = getUserByEmail(email)
                      new Promise((res) => {
                        res(userToUpdate && updateUser(userToUpdate.id, data))
                      }).then(() => {
                        const usersData = getAllUsers()
                        handleDashboardDataValues(usersData)
                      })
                    }}
                  />
                  <S.FooterPagination>
                    {allUsersData && allUsersData?.length > 5 && (
                      <Pagination
                        numberOfPages={
                          allUsersData ? Math.ceil(allUsersData.length / 5) : 0
                        }
                        onPageChange={(value) => {
                          const usersPaginated = getUsersPaginated(
                            (value - 1) * 5,
                            5
                          )
                          usersPaginated &&
                            handlePaginationDataValues(usersPaginated)
                        }}
                      />
                    )}
                  </S.FooterPagination>
                </div>
              </ContentWrapper>
            </MediaMatch>
            <MediaMatch lessThan={'medium'}>
              <div style={{ paddingBottom: '2rem' }}>
                <Heading title="Usuários" />
                <TextField
                  icon={<Search size={'1rem'} strokeWidth={2} />}
                  placeholder={'Buscar usuários'}
                  inputHeight={'small'}
                  minimal={true}
                  outsideIcon={true}
                />
              </div>
              {usersPaginatedState?.mobile.map((user) => (
                <UserCard key={user.email} {...user} />
              ))}
              <div
                style={{
                  paddingTop: '2rem',
                  paddingBottom: '5rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Pagination
                  numberOfPages={10}
                  onPageChange={(value) => {
                    const usersPaginated = getUsersPaginated((value - 1) * 5, 5)
                    usersPaginated && handlePaginationDataValues(usersPaginated)
                  }}
                />
              </div>
            </MediaMatch>
          </S.DashboardsWrapper>
        </Container>
      </S.Wrapper>
    </S.WrapperImg>
  )
}

export default DashboardTemplate
