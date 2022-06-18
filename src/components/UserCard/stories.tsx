import { Story, Meta } from '@storybook/react'
import UserCard, { UserCardProps } from '.'

export default {
  title: 'UserCard',
  component: UserCard
} as Meta

export const Default: Story<UserCardProps> = (args) => <UserCard {...args} />

Default.args = {
  activity: 'Ativo',
  creationDate: new Date().toString(),
  name: 'Fulano Ciclano',
  email: 'example@gmail.com',
  role: 'Administrador',
  imgAlt: 'Empty Photo',
  imgUrl: '/img/empty-profile-pic.png',
  onDeleteData: (email) => console.log(email),
  onEditData: (email) => console.log(email)
}
