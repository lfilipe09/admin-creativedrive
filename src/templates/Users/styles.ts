import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import signupBG from '../../../public/img/platform-bg.png'

export const Logo = styled.img`
  width: 11rem;
  margin-bottom: 5rem;
  ${media.lessThan('medium')`
      margin-top: 4rem;
      margin-bottom: 1rem;
  `}
`

export const MenuWrapper = styled.div`
  padding: 2rem 0;
  ${media.lessThan('medium')`
    display:flex ;
    align-items: center;
    justify-content: center;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    background: ${theme.gradients.blackSecondaryDesktopGradient};
    ${media.lessThan('medium')`
      background: ${theme.gradients.blackMobileGradient};
    `}
  `}
`

export const WrapperImg = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${signupBG.src});
  background-size: cover;
  background-repeat: no-repeat;
  ${media.lessThan('medium')`
    background-size: auto;
  `}
`

export const FormWrapper = styled.div`
  max-width: 30rem;
  margin: 2rem 0;
`

export const IndicatiorsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    grid-gap: ${theme.spacings.small};
  `}
`

export const DashboardsWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    max-width: 70rem;
    padding-bottom: ${theme.spacings.large};
  `}
`

export const ButtonTableGroup = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 10rem 20rem;
    justify-content: space-between;
    width: 100%;
    grid-gap: ${theme.spacings.xxlarge};
    max-width: 70rem;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const FooterPagination = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 2rem;
`
