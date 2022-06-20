import { X } from '@styled-icons/feather'
import Button from 'components/Button'
import { Container } from 'components/Container'
import ContentWrapper from 'components/ContentWrapper'
import EditProfile from 'components/EditProfile'
import FormSignEditUser from 'components/FormEdituser'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import { useUser } from 'hooks/useUser'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { User } from 'types/userTypes'
import * as S from './styles'

const EditUserTemplate = () => {
  const { getUserByEmail, updateUser } = useUser()
  const [user, setUser] = useState<User>()
  const router = useRouter()
  const { push } = router
  useEffect(() => {
    let usersTemp: User | null = null
    usersTemp = getUserByEmail(router.query.email as string)
    usersTemp && setUser(usersTemp)
    console.log('Olha a query:', router.query)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <S.Wrapper>
      <Container>
        <S.Icon>
          <Link href={'/users'} passHref>
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
              <EditProfile
                onDisable={() => console.log('desativando usuário')}
              />
              <FormSignEditUser
                initialValues={user}
                buttonText={'Alterar dados'}
                onSubmit={(value) => {
                  user && updateUser(user?.id, value)
                  push('/users')
                  console.log('Fez o submit', value)
                }}
              />
            </S.FormWrapper>
          </ContentWrapper>
        </MediaMatch>
        <MediaMatch lessThan={'medium'}>
          <S.FormWrapper>
            <Heading title={'Edição avançada'} />
            <EditProfile onDisable={() => console.log('desativando usuário')} />
            <FormSignEditUser
              initialValues={user}
              buttonText={'Alterar dados'}
              onSubmit={(value) => {
                user && updateUser(user?.id, value)
                push('/users')
                console.log('Fez o submit', value)
              }}
            />
          </S.FormWrapper>
        </MediaMatch>
      </Container>
    </S.Wrapper>
  )
}

export default EditUserTemplate
