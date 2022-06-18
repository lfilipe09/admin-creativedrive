import { Story, Meta } from '@storybook/react'
import Empty, { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty
} as Meta

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />

Default.args = {
  imgAlt: 'Rocket with clouds',
  imgSrc: '/img/empty-rocket.png',
  redirectURL: '/',
  text: 'Crie agora o seu primeiro usuário'
}

export const NoCTA: Story<EmptyProps> = (args) => <Empty {...args} />

NoCTA.args = {
  imgAlt: 'Rocket with clouds',
  imgSrc: '/img/empty-admin.png',
  text: 'Nenhum administrador à vista'
}
