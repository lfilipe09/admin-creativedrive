import { AtSign, ChevronRight, Lock } from '@styled-icons/feather'
import Button from 'components/Button'
import TextField from 'components/TextField'
import WarningAlert from 'components/Warning'
import { useState } from 'react'
import { UserFormSignIn } from 'types/userTypes'
import { FieldErrors, UserValidateSignin } from 'utils/validations'
import * as S from './styles'

export type FormSignInProps = {
  onSubmit: (value: UserFormSignIn) => void
  error?: string
}

const FormSignIn = ({ onSubmit, error }: FormSignInProps) => {
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState<UserFormSignIn>({
    email: '',
    password: ''
  })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const valuesValidate = values
    const errors = UserValidateSignin(valuesValidate)
    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    onSubmit(values)
    setFieldError({})
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      {!!error && (
        <div style={{ marginBottom: '1rem' }}>
          <WarningAlert title={error} />
        </div>
      )}
      <TextField
        label={'E-mail'}
        name={'email'}
        icon={<AtSign size={'1.5rem'} />}
        placeholder={'email@example.com'}
        error={fieldError?.email}
        onInputChange={(v) => {
          handleInput('email', v)
        }}
      />
      <TextField
        label={'Senha'}
        name={'password'}
        icon={<Lock size={'1.5rem'} />}
        placeholder={'Insira sua senha'}
        password={true}
        error={fieldError?.password}
        onInputChange={(v) => {
          handleInput('password', v)
        }}
      />
      <S.ButtonWrapper>
        <Button
          disabled={!values.email || !values.password}
          type={'submit'}
          icon={<ChevronRight strokeWidth={4} width={'1rem'} />}
        >
          Acessar a plataforma
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default FormSignIn
