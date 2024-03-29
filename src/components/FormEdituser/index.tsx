import {
  AtSign,
  ChevronRight,
  Globe,
  Hash,
  Lock,
  User
} from '@styled-icons/feather'
import Button from 'components/Button'
import Dropdown from 'components/Dropdown'
import TextField from 'components/TextField'
import { useEffect, useState } from 'react'
import { User as Usertype, UserForm } from 'types/userTypes'
import { FieldErrors, UserValidate } from 'utils/validations'
import * as S from './styles'

export type FormSignEditUserProps = {
  onSubmit: (value: UserForm) => void
  buttonText: string
  initialValues?: Usertype
}

const FormSignEditUser = ({
  onSubmit,
  buttonText,
  initialValues
}: FormSignEditUserProps) => {
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState<UserForm>({
    cpf: '',
    email: '',
    name: '',
    password: '',
    surname: '',
    profile: 'Administrador'
  })

  useEffect(() => {
    setValues({
      cpf: initialValues?.cpf ?? '',
      email: initialValues?.email ?? '',
      name: initialValues?.name ?? '',
      password: initialValues?.password ?? '',
      surname: initialValues?.surname ?? '',
      profile: initialValues?.profile ?? 'Administrador'
    })
    console.log(initialValues)
  }, [initialValues])

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const valuesValidate = values
    //delete valuesValidate['profile']
    const errors = UserValidate(valuesValidate)
    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }
    onSubmit(values)
    setFieldError({})
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.InputGroup>
        <TextField
          label={'Nome'}
          name={'name'}
          minimal={true}
          initialValue={values.name}
          icon={<User size={'1.5rem'} />}
          placeholder={'Primeiro nome'}
          error={fieldError?.name}
          onInputChange={(v) => {
            handleInput('name', v)
          }}
        />
        <TextField
          label={'Sobrenome'}
          name={'surname'}
          initialValue={values.surname}
          minimal={true}
          icon={<User size={'1.5rem'} />}
          placeholder={'Último nome'}
          error={fieldError?.surname}
          onInputChange={(v) => {
            handleInput('surname', v)
          }}
        />
      </S.InputGroup>
      <S.InputGroup>
        <TextField
          label={'CPF'}
          name={'cpf'}
          initialValue={values.cpf}
          minimal={true}
          icon={<Hash size={'1.5rem'} />}
          placeholder={'000.000.000-00'}
          mask={'999.999.999-99'}
          error={fieldError?.cpf}
          onInputChange={(v) => {
            handleInput(
              'cpf',
              v
                .split('')
                .filter((char) => /^[0-9]*$/.test(char))
                .join('')
            )
          }}
        />
        <Dropdown
          label={'Perfil'}
          icon={<Globe size={'1.5rem'} />}
          minimal={true}
          options={['Administrador', 'Usuário']}
          initialValue={values.profile}
          onDropdownChange={(v) => handleInput('profile', v)}
        />
      </S.InputGroup>
      <TextField
        label={'E-mail'}
        name={'email'}
        initialValue={values.email}
        minimal={true}
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
        initialValue={values.password}
        minimal={true}
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
          disabled={
            !values.cpf ||
            !values.email ||
            !values.name ||
            !values.password ||
            !values.surname
          }
          type={'submit'}
          icon={<ChevronRight strokeWidth={4} width={'1rem'} />}
        >
          {buttonText}
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default FormSignEditUser
