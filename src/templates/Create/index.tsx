import { X } from '@styled-icons/feather'
import Button from 'components/Button'
import { Container } from 'components/Container'
import ContentWrapper from 'components/ContentWrapper'
import EditProfile from 'components/EditProfile'
import FormSignEditUser from 'components/FormEdituser'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import { useAuth } from 'hooks/useAuth'
import { useUser } from 'hooks/useUser'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as S from './styles'

const Create = () => {
  const { createUser, getUserByEmail } = useUser()
  const { validateAuth, getAuth } = useAuth()
  const routes = useRouter()
  const { push } = routes
  useEffect(() => {
    const session = validateAuth()
    !session && push('/login')
    const userProfileTemp = getAuth()
    const userTemp =
      userProfileTemp && getUserByEmail(userProfileTemp?.userEmail)
    userTemp?.profile === 'Usuário' && push('/dashboard')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <S.Wrapper>
      <Container>
        <S.Icon>
          <Link href={'/dashboard'} passHref>
            <Button
              as={'a'}
              icon={<X size={'2rem'} strokeWidth={1} />}
              iconGrey={true}
            />
          </Link>
        </S.Icon>
        <MediaMatch greaterThan={'medium'}>
          <ContentWrapper title={'Perfil'}>
            <S.FormWrapper>
              <EditProfile />
              <FormSignEditUser
                buttonText={'Criar usuario'}
                onSubmit={(value) => {
                  createUser(value)
                  push('/dashboard')
                }}
              />
            </S.FormWrapper>
          </ContentWrapper>
        </MediaMatch>
        <MediaMatch lessThan={'medium'}>
          <S.FormWrapper>
            <Heading title={'Criar usuário'} />
            <EditProfile />
            <FormSignEditUser
              buttonText={'Criar usuario'}
              onSubmit={(value) => {
                createUser(value)
                push('/dashboard')
              }}
            />
          </S.FormWrapper>
        </MediaMatch>
      </Container>
    </S.Wrapper>
  )
}

export default Create
