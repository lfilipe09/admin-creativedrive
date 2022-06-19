import { Container } from 'components/Container'
import FormSignUp from 'components/FormSignUp'
import HeroHeading from 'components/HeroHeading'
import Link from 'next/link'

import * as S from './styles'

const SignUpTemplate = () => {
  return (
    <S.WrapperImg>
      <S.Wrapper>
        <Container>
          <S.LogoWrapper>
            <S.Logo src={'/img/creativedrive.png'} />
          </S.LogoWrapper>
          <HeroHeading title="C*ri*e a s*ua* c*o*n*t*a" />
          <S.Text>
            Ja possui um cadastro?{' '}
            <Link href="/login" passHref>
              <a>Faça o login</a>
            </Link>
          </S.Text>
          <S.FormWrapper>
            <FormSignUp onSubmit={() => console.log('submit')} />
          </S.FormWrapper>
        </Container>
      </S.Wrapper>
    </S.WrapperImg>
  )
}

export default SignUpTemplate
