import { Story, Meta } from '@storybook/react'
import { User, Users } from '@styled-icons/feather'
import DashboardData from 'components/DashboardData'
import Empty from 'components/Empty'
import Table from 'components/Table'
import { tableMock } from 'components/Table/mock'
import ContentWrapper, { ContentWrapperProps } from '.'

export default {
  title: 'ContentWrapper',
  component: ContentWrapper
} as Meta

export const Default: Story<ContentWrapperProps> = (args) => (
  <div style={{ maxWidth: '23rem' }}>
    <ContentWrapper {...args} />
  </div>
)

Default.args = {
  children: (
    <Empty
      imgAlt="rocket"
      imgSrc="/img/empty-rocket.png"
      text="Crie agora o seu primeiro usuário"
      redirectURL="/"
    />
  ),
  title: 'Todos os usuários'
}

export const IconAndButton: Story<ContentWrapperProps> = (args) => (
  <div style={{ maxWidth: '17rem' }}>
    <ContentWrapper {...args} />
  </div>
)

IconAndButton.args = {
  children: (
    <DashboardData
      dataNumber={13}
      title={'Colaboradores'}
      icon={<Users strokeWidth={1} width={'1.2rem'} />}
      isActive={true}
    />
  ),
  title: 'Dashboard',
  topIcon: <User size={'1.5rem'} />,
  RedirectUrlRightButton: '/',
  size: 'small'
}

export const FullIconAndButton: Story<ContentWrapperProps> = (args) => (
  <div style={{ maxWidth: '60rem' }}>
    <ContentWrapper {...args} />
  </div>
)

FullIconAndButton.args = {
  children: <Table data={tableMock} />,
  title: 'Dashboard',
  OnRightButtonClick: () => console.log('clicou botão direito'),
  rightButtonText: 'Criar usuario',
  leftButtonText: 'Cancelar',
  RedirectUrlLeftButton: '/'
}
