import { X } from '@styled-icons/feather'
import Button from 'components/Button'
import { Container } from 'components/Container'
import ContentWrapper from 'components/ContentWrapper'
import EditProfile from 'components/EditProfile'
import FormSignEditUser from 'components/FormEdituser'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import Link from 'next/link'
import * as S from './styles'

const CreateUserTemplate = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.Icon>
          <Link href={'/'} passHref>
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
                onSubmit={() => console.log('Fez o submit')}
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
              onSubmit={() => console.log('Fez o submit')}
            />
          </S.FormWrapper>
        </MediaMatch>
      </Container>
    </S.Wrapper>
  )
}

export default CreateUserTemplate
