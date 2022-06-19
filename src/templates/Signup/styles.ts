import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import signupBG from '../../../public/img/signin-bg.png'

export const Logo = styled.img`
  width: 11rem;
  margin-bottom: 5rem;
  ${media.lessThan('medium')`
      margin-top: 4rem;
      margin-bottom: 1rem;
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    display:flex ;
    align-items: center;
    justify-content: center
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin: 1rem 0;
    letter-spacing: 0.1rem;
    > a {
      text-decoration: none;
      color: ${theme.colors.primary};
    }
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    background: ${theme.gradients.blackMainDesktopGradient};
    ${media.lessThan('medium')`
      background: ${theme.gradients.blackMobileGradient};
      height: unset;
    `}
    display: flex;
    align-items: center;
  `}
`

export const WrapperImg = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${signupBG.src});
  background-size: cover;
  background-repeat: no-repeat;
`

export const FormWrapper = styled.div`
  max-width: 40rem;
  margin: 2rem 0;
`
