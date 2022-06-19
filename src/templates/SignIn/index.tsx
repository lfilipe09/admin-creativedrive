import { Container } from 'components/Container'
import FormSignIn from 'components/FormSignIn'
import HeroHeading from 'components/HeroHeading'
import { useAuth } from 'hooks/useAuth'
import { useUser } from 'hooks/useUser'
import { useState } from 'react'
import { useRouter } from 'next/router'

import * as S from './styles'
import Link from 'next/link'

const SignInTemplate = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const { validateUser } = useUser()
  const { createAuth } = useAuth()
  const routes = useRouter()
  const { push } = routes
  return (
    <S.WrapperImg>
      <S.Wrapper>
        <Container>
          <S.LogoWrapper>
            <S.Logo src={'/img/creativedrive.png'} />
          </S.LogoWrapper>
          <HeroHeading title="B*e*m-v*in*do" />
          <S.Text>
            Não possui um cadastro?{' '}
            <Link href="/" passHref>
              <a>Faça o cadastro aqui</a>
            </Link>
          </S.Text>
          <S.FormWrapper>
            <FormSignIn
              error={errorMessage === '' ? undefined : errorMessage}
              onSubmit={(value) => {
                const data = validateUser(value.email, value.password)
                if (data === null) {
                  setErrorMessage(
                    'Não foi encontrado nenhum usuário com esses dados'
                  )
                } else {
                  createAuth()
                  push('/dashboard')
                }
              }}
            />
          </S.FormWrapper>
        </Container>
      </S.Wrapper>
    </S.WrapperImg>
  )
}

export default SignInTemplate
