import { PlusCircle, Search } from '@styled-icons/feather'
import Button from 'components/Button'
import { Container } from 'components/Container'
import ContentWrapper from 'components/ContentWrapper'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import Menu from 'components/Menu'
import { menuItems } from 'components/Menu/menuItems.fixtures'
import Pagination from 'components/Pagination'
import Table from 'components/Table'
import {
  tableMockAdmin,
  tableMockInactive,
  tableMockReduced
} from 'components/Table/mock'
import TextField from 'components/TextField'
import UserCard from 'components/UserCard'
import Link from 'next/link'

import * as S from './styles'

const UsersTemplate = () => {
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
                <div style={{ width: '100%' }}>
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
                    data={tableMockReduced}
                    isEditable={true}
                    editableFields={['nome', 'perfil', 'email', 'atividade']}
                    OnDeleteLine={(email) => {
                      console.log(email)
                    }}
                    onChangeLine={(email, data) => {
                      console.log(email)
                      console.log(data)
                    }}
                  />
                  <S.FooterPagination>
                    <Pagination
                      numberOfPages={10}
                      onPageChange={() => console.log('mudou')}
                    />
                  </S.FooterPagination>
                </div>
              </ContentWrapper>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gridGap: '3rem'
                }}
              >
                <ContentWrapper title={'Administradores'}>
                  <div style={{ width: '100%' }}>
                    <Table
                      data={tableMockAdmin}
                      isEditable={true}
                      editableFields={['nome', 'perfil', 'email', 'atividade']}
                      OnDeleteLine={(email) => {
                        console.log(email)
                      }}
                      onChangeLine={(email, data) => {
                        console.log(email)
                        console.log(data)
                      }}
                    />
                    <S.FooterPagination>
                      <Pagination
                        numberOfPages={10}
                        onPageChange={() => console.log('mudou')}
                      />
                    </S.FooterPagination>
                  </div>
                </ContentWrapper>
                <ContentWrapper title={'Usuários inativos'}>
                  <div style={{ width: '100%' }}>
                    <Table
                      data={tableMockInactive}
                      isEditable={true}
                      editableFields={['nome', 'perfil', 'email', 'atividade']}
                      OnDeleteLine={(email) => {
                        console.log(email)
                      }}
                      onChangeLine={(email, data) => {
                        console.log(email)
                        console.log(data)
                      }}
                    />
                    <S.FooterPagination>
                      <Pagination
                        numberOfPages={10}
                        onPageChange={() => console.log('mudou')}
                      />
                    </S.FooterPagination>
                  </div>
                </ContentWrapper>
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
            <UserCard
              activity={'Ativo'}
              creationDate={new Date().toString()}
              name={'Fulano Ciclano'}
              email={'example@gmail.com'}
              role={'Administrador'}
              imgAlt={'Empty Photo'}
              imgUrl={'/img/empty-profile-pic.png'}
              onDeleteData={(email) => console.log(email)}
              onEditData={(email) => console.log(email)}
            />
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
                onPageChange={() => console.log('mudou')}
              />
            </div>
            <div style={{ paddingBottom: '2rem' }}>
              <Heading title="Administradores" />
            </div>
            <UserCard
              activity={'Ativo'}
              creationDate={new Date().toString()}
              name={'Fulano Ciclano'}
              email={'example@gmail.com'}
              role={'Administrador'}
              imgAlt={'Empty Photo'}
              imgUrl={'/img/empty-profile-pic.png'}
              onDeleteData={(email) => console.log(email)}
              onEditData={(email) => console.log(email)}
            />
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
                onPageChange={() => console.log('mudou')}
              />
            </div>
            <div style={{ paddingBottom: '2rem' }}>
              <Heading title="Inativos" />
            </div>
            <UserCard
              activity={'Ativo'}
              creationDate={new Date().toString()}
              name={'Fulano Ciclano'}
              email={'example@gmail.com'}
              role={'Administrador'}
              imgAlt={'Empty Photo'}
              imgUrl={'/img/empty-profile-pic.png'}
              onDeleteData={(email) => console.log(email)}
              onEditData={(email) => console.log(email)}
            />
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
                onPageChange={() => console.log('mudou')}
              />
            </div>
          </MediaMatch>
        </Container>
      </S.Wrapper>
    </S.WrapperImg>
  )
}

export default UsersTemplate
