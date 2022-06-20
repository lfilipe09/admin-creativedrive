import { PlusCircle, Search, User } from '@styled-icons/feather'
import Button from 'components/Button'
import { Container } from 'components/Container'
import ContentWrapper from 'components/ContentWrapper'
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
import { UsersPaginated } from 'templates/Dashboard'
import { User as UserType } from 'types/userTypes'

import * as S from './styles'

const UsersTemplate = () => {
  const {
    searchUser,
    getAllUsers,
    getUsersPaginated,
    getUserByEmail,
    deleteUser
  } = useUser()
  const { validateAuth, getAuth } = useAuth()
  const [allUsersData, setAllUsersData] = useState<UserType[]>()
  const [allAdminData, setAllAdminData] = useState<UserType[]>()
  const [allInactiveData, setAllInactiveData] = useState<UserType[]>()
  const [userProfile, setUserProfile] = useState<'Administrador' | 'Usuário'>(
    'Administrador'
  )
  const [usersPaginatedState, setUsersPaginatedState] =
    useState<UsersPaginated>()
  const [adminPaginatedState, setAdminPaginatedState] =
    useState<UsersPaginated>()
  const [inactivesPaginatedState, setInactivesPaginatedState] =
    useState<UsersPaginated>()
  const routes = useRouter()
  const { push } = routes

  function handlePaginationDataValues(
    usersPaginated: UserType[],
    type: 'general' | 'admin' | 'inactive'
  ) {
    const profilesPics: JSX.Element[] = []
    const names: string[] = []
    const email: string[] = []
    const activities: string[] = []
    const profile: string[] = []

    usersPaginated.map((user) => {
      if (type === 'general') {
        profilesPics.push(<User size={'1rem'} key={''} />)
        names.push(user.name)
        email.push(user.email)
        activities.push(user.activity)
        profile.push(user.profile)
      } else if (type === 'admin') {
        if (user.profile === 'Administrador') {
          profilesPics.push(<User size={'1rem'} key={''} />)
          names.push(user.name)
          email.push(user.email)
          activities.push(user.activity)
          profile.push(user.profile)
        }
      } else {
        if (user.activity === 'Inativo') {
          profilesPics.push(<User size={'1rem'} key={''} />)
          names.push(user.name)
          email.push(user.email)
          activities.push(user.activity)
          profile.push(user.profile)
        }
      }
    })

    const DesktopTable: TableColumn[] =
      type === 'general'
        ? [
            { foto: profilesPics },
            { nome: names },
            { email: email },
            { atividade: activities }
          ]
        : type === 'admin'
        ? [{ foto: profilesPics }, { nome: names }, { email: email }]
        : [{ foto: profilesPics }, { nome: names }, { email: email }]

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

    if (type === 'general') {
      setUsersPaginatedState({
        desktop: DesktopTable,
        mobile: usersPaginatedState
          ? [...usersPaginatedState.mobile, ...MobileCard]
          : MobileCard
      })
    } else if (type === 'admin') {
      setAdminPaginatedState({
        desktop: DesktopTable,
        mobile: adminPaginatedState
          ? [...adminPaginatedState.mobile, ...MobileCard]
          : MobileCard
      })
    } else {
      setInactivesPaginatedState({
        desktop: DesktopTable,
        mobile: inactivesPaginatedState
          ? [...inactivesPaginatedState.mobile, ...MobileCard]
          : MobileCard
      })
    }
  }

  useEffect(() => {
    const usersData = getAllUsers()
    setAllUsersData(usersData)
    setAllAdminData(
      usersData.filter((user) => user.profile === 'Administrador')
    )
    setAllInactiveData(usersData.filter((user) => user.activity === 'Inativo'))
    const usersPaginated = getUsersPaginated(0, 10)
    const usersPaginatedReduced = getUsersPaginated(0, 5)
    usersPaginated && handlePaginationDataValues(usersPaginated, 'general')
    usersPaginatedReduced &&
      handlePaginationDataValues(usersPaginatedReduced, 'admin')
    usersPaginatedReduced &&
      handlePaginationDataValues(usersPaginatedReduced, 'inactive')
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
            <MediaMatch lessThan={'large'}>
              <S.Logo src={'/img/creativedrive.png'} />
            </MediaMatch>
            <Menu
              menuItems={menuItems}
              logoImageUrl={'/img/creativedrive.png'}
              Breakpoint={'large'}
            />
          </S.MenuWrapper>
          <MediaMatch greaterThan="large">
            <S.DashboardsWrapper>
              <ContentWrapper title={'Usuários da plataforma'}>
                {allUsersData?.length === 0 ? (
                  <Empty
                    imgAlt="rocket"
                    imgSrc="/img/empty-rocket.png"
                    text="Crie agora o seu primeiro usuário"
                    redirectURL="/criar-usuario"
                  />
                ) : (
                  <div style={{ width: '100%' }}>
                    <S.ButtonTableGroup>
                      <TextField
                        icon={<Search size={'1rem'} strokeWidth={2} />}
                        placeholder={'Buscar usuários'}
                        inputHeight={'small'}
                        minimal={true}
                        outsideIcon={true}
                        onInputChange={(value) => {
                          const usersOnSearch = searchUser(value)

                          usersOnSearch &&
                            handlePaginationDataValues(usersOnSearch, 'general')
                        }}
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
                      editableFields={['nome', 'perfil', 'email', 'atividade']}
                      OnDeleteLine={(email) => {
                        const userToDelete = getUserByEmail(email)
                        userToDelete && deleteUser(userToDelete.id)
                      }}
                      handleChangeLine={(email) => {
                        console.log(email)
                        push({
                          pathname: '/editar-usuario',
                          query: {
                            email: email
                          }
                        })
                      }}
                      onChangeLine={(email, data) => {
                        console.log(email)
                        console.log(data)
                      }}
                    />
                    <S.FooterPagination>
                      {allUsersData && allUsersData?.length > 10 && (
                        <Pagination
                          numberOfPages={
                            allUsersData
                              ? Math.ceil(allUsersData.length / 5)
                              : 0
                          }
                          onPageChange={(value) => {
                            const usersPaginated = getUsersPaginated(
                              (value - 1) * 10,
                              10
                            )
                            usersPaginated &&
                              handlePaginationDataValues(
                                usersPaginated,
                                'general'
                              )
                          }}
                        />
                      )}
                    </S.FooterPagination>
                  </div>
                )}
              </ContentWrapper>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gridGap: '3rem'
                }}
              >
                <ContentWrapper title={'Administradores'}>
                  {allUsersData?.length === 0 ? (
                    <Empty
                      imgAlt="rocket"
                      imgSrc="/img/empty-admin.png"
                      text="Nenhum administrador a vista"
                    />
                  ) : (
                    <div style={{ width: '100%' }}>
                      <Table
                        data={
                          adminPaginatedState?.desktop
                            ? adminPaginatedState.desktop
                            : []
                        }
                        isEditable={userProfile !== 'Usuário' ? true : false}
                        editableFields={[
                          'nome',
                          'perfil',
                          'email',
                          'atividade'
                        ]}
                        handleChangeLine={(email) => {
                          push({
                            pathname: '/editar-usuario',
                            query: {
                              email: email
                            }
                          })
                        }}
                        OnDeleteLine={(email) => {
                          const userToDelete = getUserByEmail(email)
                          userToDelete && deleteUser(userToDelete.id)
                        }}
                        onChangeLine={(email, data) => {
                          console.log(email)
                          console.log(data)
                        }}
                      />
                      <S.FooterPagination>
                        {allAdminData && allAdminData?.length > 5 && (
                          <Pagination
                            numberOfPages={
                              allAdminData
                                ? Math.ceil(allAdminData.length / 5)
                                : 0
                            }
                            onPageChange={(value) => {
                              const usersPaginated = getUsersPaginated(
                                (value - 1) * 5,
                                5
                              )
                              usersPaginated &&
                                handlePaginationDataValues(
                                  usersPaginated,
                                  'admin'
                                )
                            }}
                          />
                        )}
                      </S.FooterPagination>
                    </div>
                  )}
                </ContentWrapper>
                {allUsersData?.length !== 0 && (
                  <ContentWrapper title={'Usuários inativos'}>
                    <div style={{ width: '100%' }}>
                      <Table
                        data={
                          inactivesPaginatedState?.desktop
                            ? inactivesPaginatedState.desktop
                            : []
                        }
                        isEditable={userProfile !== 'Usuário' ? true : false}
                        editableFields={[
                          'nome',
                          'perfil',
                          'email',
                          'atividade'
                        ]}
                        handleChangeLine={(email) => {
                          push({
                            pathname: '/editar-usuario',
                            query: {
                              email: email
                            }
                          })
                        }}
                        OnDeleteLine={(email) => {
                          const userToDelete = getUserByEmail(email)
                          userToDelete && deleteUser(userToDelete.id)
                        }}
                        onChangeLine={(email, data) => {
                          console.log(email)
                          console.log(data)
                        }}
                      />
                      <S.FooterPagination>
                        {allInactiveData && allInactiveData?.length > 5 && (
                          <Pagination
                            numberOfPages={
                              allInactiveData
                                ? Math.ceil(allInactiveData.length / 5)
                                : 0
                            }
                            onPageChange={(value) => {
                              const usersPaginated = getUsersPaginated(
                                (value - 1) * 5,
                                5
                              )
                              usersPaginated &&
                                handlePaginationDataValues(
                                  usersPaginated,
                                  'inactive'
                                )
                            }}
                          />
                        )}
                      </S.FooterPagination>
                    </div>
                  </ContentWrapper>
                )}
              </div>
            </S.DashboardsWrapper>
          </MediaMatch>
          <MediaMatch lessThan={'large'}>
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
                    setUsersPaginatedState({
                      desktop: usersPaginatedState.desktop,
                      mobile: []
                    })
                    const usersPaginated = getUsersPaginated(0, 5)
                    usersPaginated &&
                      handlePaginationDataValues(usersPaginated, 'general')
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
                key={user.creationDate}
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
                  const usersPaginated = getUsersPaginated((value - 1) * 10, 10)
                  usersPaginated &&
                    handlePaginationDataValues(usersPaginated, 'general')
                }}
              />
            </div>
          </MediaMatch>
        </Container>
      </S.Wrapper>
    </S.WrapperImg>
  )
}

export default UsersTemplate
