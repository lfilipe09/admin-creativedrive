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
import Menu from 'components/Menu'
import { menuItems } from 'components/Menu/menuItems.fixtures'
import Pagination from 'components/Pagination'
import Table from 'components/Table'
import tableMock from 'components/Table/mock'
import TextField from 'components/TextField'
import Link from 'next/link'

import * as S from './styles'

const Dashboard = () => {
  return (
    <S.WrapperImg>
      <S.Wrapper>
        <Container>
          <S.MenuWrapper>
            <Menu
              menuItems={menuItems}
              logoImageUrl={'/img/creativedrive.png'}
            />
          </S.MenuWrapper>
          <S.DashboardsWrapper>
            <S.IndicatiorsWrapper>
              <ContentWrapper
                title="Dashboard"
                topIcon={<User size={'1.5rem'} />}
                size={'small'}
                RedirectUrlRightButton={'/users'}
              >
                <DashboardData
                  dataNumber={13}
                  title={'Colaboradores'}
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
                  dataNumber={4}
                  title={'Administradores'}
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
                  dataNumber={7}
                  title={'Perfis inativos'}
                  isActive={false}
                  icon={<MinusCircle strokeWidth={1} width={'1.2rem'} />}
                />
              </ContentWrapper>
            </S.IndicatiorsWrapper>
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
                  data={tableMock}
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
          </S.DashboardsWrapper>
        </Container>
      </S.Wrapper>
    </S.WrapperImg>
  )
}

export default Dashboard
