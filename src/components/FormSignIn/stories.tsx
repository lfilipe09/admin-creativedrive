import { Story, Meta } from '@storybook/react'
import FormSignIn, { FormSignInProps } from '.'

export default {
  title: 'Forms/FormSignIn',
  component: FormSignIn
} as Meta

export const Default: Story<FormSignInProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <FormSignIn {...args} />
  </div>
)

Default.args = {
  onSubmit: (value) => console.log(value)
}
