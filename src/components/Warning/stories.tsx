import { Story, Meta } from '@storybook/react'
import WarningAlert, { WarningAlertProps } from '.'

export default {
  title: 'Warning',
  component: WarningAlert
} as Meta

export const Default: Story<WarningAlertProps> = (args) => (
  <WarningAlert {...args} />
)

Default.args = {
  title: 'Usuario não encontrado.'
}
