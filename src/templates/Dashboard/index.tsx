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
import Empty from 'components/Empty'
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
  const { validateAuth, getAuth } = useAuth()
  const [usersTypeAmount, setUsersTypeAmount] = useState<UsersTypeNumber>()
  const [userProfile, setUserProfile] = useState<'Administrador' | 'Usuário'>(
    'Administrador'
  )
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
        role: user.profile
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
    const userProfileTemp = getAuth()
    const userTemp =
      userProfileTemp && getUserByEmail(userProfileTemp?.userEmail)
    userTemp && setUserProfile(userTemp.profile)
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
                size={
                  usersTypeAmount && usersTypeAmount?.actives > 0
                    ? 'small'
                    : undefined
                }
                RedirectUrlRightButton={
                  usersTypeAmount && usersTypeAmount?.actives > 0
                    ? '/users'
                    : userProfile !== 'Usuário'
                    ? '/criar-usuario'
                    : '/users'
                }
              >
                {
                  <div
                    style={{
                      margin: usersTypeAmount?.actives === 0 ? '2rem' : '0'
                    }}
                  >
                    <DashboardData
                      dataNumber={
                        usersTypeAmount?.actives === 0
                          ? undefined
                          : usersTypeAmount?.actives
                      }
                      title={
                        usersTypeAmount?.actives === 0
                          ? 'Nenhum colaborador cadastrado'
                          : usersTypeAmount?.actives === 1
                          ? 'Colaborador'
                          : 'Colaboradores'
                      }
                      isActive={usersTypeAmount?.actives !== 0}
                      icon={<Users strokeWidth={1} width={'1.2rem'} />}
                    />
                  </div>
                }
              </ContentWrapper>
              <ContentWrapper
                topIcon={<User size={'1.5rem'} />}
                size={
                  usersTypeAmount && usersTypeAmount?.admin > 0
                    ? 'small'
                    : undefined
                }
                RedirectUrlRightButton={
                  usersTypeAmount && usersTypeAmount?.admin > 0
                    ? '/users'
                    : userProfile !== 'Usuário'
                    ? '/criar-usuario'
                    : '/users'
                }
              >
                <div
                  style={{
                    margin: usersTypeAmount?.admin === 0 ? '2rem' : '0'
                  }}
                >
                  <DashboardData
                    dataNumber={
                      usersTypeAmount?.admin === 0
                        ? undefined
                        : usersTypeAmount?.admin
                    }
                    title={
                      usersTypeAmount?.actives === 0
                        ? 'Nenhum administrador cadastrado'
                        : usersTypeAmount?.admin === 1
                        ? 'Administrador'
                        : 'Administradores'
                    }
                    isActive={usersTypeAmount?.admin !== 0}
                    icon={<Users strokeWidth={1} width={'1.2rem'} />}
                  />
                </div>
              </ContentWrapper>
              <ContentWrapper
                topIcon={<User size={'1.5rem'} />}
                size={
                  allUsersData && allUsersData?.length > 0 ? 'small' : undefined
                }
                RedirectUrlRightButton={
                  usersTypeAmount && usersTypeAmount?.inactive > 0
                    ? '/users'
                    : userProfile !== 'Usuário'
                    ? '/criar-usuario'
                    : '/users'
                }
              >
                <div
                  style={{
                    margin: allUsersData?.length === 0 ? '2rem' : '0'
                  }}
                >
                  <DashboardData
                    dataNumber={
                      allUsersData?.length === 0
                        ? undefined
                        : usersTypeAmount?.inactive
                    }
                    title={
                      allUsersData?.length === 0
                        ? 'Nenhum usuário inativo'
                        : usersTypeAmount?.inactive === 1
                        ? 'Perfil inativo'
                        : 'Perfis inativos'
                    }
                    isActive={false}
                    icon={<MinusCircle strokeWidth={1} width={'1.2rem'} />}
                  />
                </div>
              </ContentWrapper>
            </S.IndicatiorsWrapper>
            <MediaMatch greaterThan={'medium'}>
              <ContentWrapper
                title={'Usuários da plataforma'}
                rightButtonText={
                  allUsersData && allUsersData?.length > 0
                    ? 'Visualizar usuarios'
                    : undefined
                }
                RedirectUrlRightButton={
                  allUsersData && allUsersData?.length > 0
                    ? '/users'
                    : undefined
                }
              >
                {allUsersData?.length === 0 ? (
                  <Empty
                    imgAlt="rocket"
                    imgSrc="/img/empty-rocket.png"
                    text="Crie agora o seu primeiro usuário"
                    redirectURL="/criar-usuario"
                  />
                ) : (
                  <div style={{ padding: '0.5rem 2rem', width: '100%' }}>
                    <S.ButtonTableGroup>
                      <TextField
                        icon={<Search size={'1rem'} strokeWidth={2} />}
                        placeholder={'Buscar usuários'}
                        inputHeight={'small'}
                        minimal={true}
                        outsideIcon={true}
                      />
                      {userProfile !== 'Usuário' && (
                        <Link href={'/criar-usuario'} passHref>
                          <Button
                            as="a"
                            icon={<PlusCircle size={'1rem'} strokeWidth={2} />}
                          >
                            criar um novo usuario
                          </Button>
                        </Link>
                      )}
                    </S.ButtonTableGroup>
                    <Table
                      data={
                        usersPaginatedState?.desktop
                          ? usersPaginatedState.desktop
                          : []
                      }
                      isEditable={userProfile !== 'Usuário' ? true : false}
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
                            allUsersData
                              ? Math.ceil(allUsersData.length / 5)
                              : 0
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
                )}
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
                <UserCard
                  onDeleteData={(email) => {
                    const userToDelete = getUserByEmail(email)
                    new Promise((res) => {
                      res(userToDelete && deleteUser(userToDelete.id))
                    }).then(() => {
                      const usersData = getAllUsers()
                      handleDashboardDataValues(usersData)
                      setUsersPaginatedState({
                        desktop: usersPaginatedState.desktop,
                        mobile: []
                      })
                      const usersPaginated = getUsersPaginated(0, 5)
                      usersPaginated &&
                        handlePaginationDataValues(usersPaginated)
                    })
                  }}
                  onEditData={(email) => {
                    push({
                      pathname: '/editar-usuario',
                      query: {
                        email: email
                      }
                    })
                  }}
                  key={user.email}
                  {...user}
                />
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
