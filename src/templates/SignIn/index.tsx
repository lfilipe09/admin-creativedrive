import { Container } from 'components/Container'
import FormSignIn from 'components/FormSignIn'
import HeroHeading from 'components/HeroHeading'

import * as S from './styles'

const SignIn = () => {
  return (
    <S.WrapperImg>
      <S.Wrapper>
        <Container>
          <S.LogoWrapper>
            <S.Logo src={'/img/creativedrive.png'} />
          </S.LogoWrapper>
          <HeroHeading title="B*e*m-v*in*do" />
          <S.FormWrapper>
            <FormSignIn onSubmit={() => console.log('submit')} />
          </S.FormWrapper>
        </Container>
      </S.Wrapper>
    </S.WrapperImg>
  )
}

export default SignIn
