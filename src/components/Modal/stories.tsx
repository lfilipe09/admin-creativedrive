import { Story, Meta } from '@storybook/react'
import Modal, { ModalProps } from '.'

export default {
  title: 'Modal',
  component: Modal,
  parameters: {
    backgrounds: {
      default: 'creativedrive-light'
    }
  }
} as Meta

export const Default: Story<ModalProps> = (args) => <Modal {...args} />

Default.args = {
  onDelete: () => console.log('deletar'),
  onReturn: () => console.log('voltar')
}
