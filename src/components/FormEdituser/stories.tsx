import { Story, Meta } from '@storybook/react'
import FormSignEditUser, { FormSignEditUserProps } from '.'

export default {
  title: 'Forms/FormSignEditUser',
  component: FormSignEditUser
} as Meta

export const Default: Story<FormSignEditUserProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <FormSignEditUser {...args} />
  </div>
)

Default.args = {
  onSubmit: (valores) => console.log('form processado, os valores: ', valores),
  buttonText: 'criar usuario'
}
