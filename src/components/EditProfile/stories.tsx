import { Story, Meta } from '@storybook/react'
import EditProfile, { EditProfileProps } from '.'

export default {
  title: 'EditProfile',
  component: EditProfile
} as Meta

export const Default: Story<EditProfileProps> = (args) => (
  <EditProfile {...args} />
)

Default.args = {
  onDisable: () => console.log('desativando usuário')
}
