import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'
import { darken } from 'polished'

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

const InputLabelWrapperModifier = {
  minimal: (theme: DefaultTheme) => css`
    background: transparent;
    border: 1px solid ${theme.colors.darkGray};
  `
}

type InputLabelWrapperProps = { minimal?: boolean; inputHeight: string }

export const InputLabelWrapper = styled.div<InputLabelWrapperProps>`
  ${({ theme, minimal, inputHeight }) => css`
    display: flex;
    justify-content: space-between;
    background: ${theme.gradients.grayGradient};
    border-radius: ${inputHeight == 'big' ? theme.border.radius : '0.3rem'};
    padding: ${inputHeight == 'big' ? '0.6rem' : '0'}
      ${inputHeight == 'big' ? theme.spacings.xsmall : '0.5rem'};
    border: 0;
    &:focus-within {
      outline: 1.5px solid ${theme.colors.primary};
    }
    ${minimal && InputLabelWrapperModifier.minimal(theme)}
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    input[type='password']:not(:placeholder-shown) {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`
type InputProps = { inputHeight: string }
export const Input = styled.input<InputProps>`
  ${({ theme, inputHeight }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${inputHeight == 'big' ? theme.spacings.xxsmall : '0.3rem'} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    //remover aquele autofill do google que deixa azulzinho
    //o filter none é pra remover do firefox que tem filtro só lá
    @-webkit-keyframes autofill {
      0%,
      100% {
        color: #666;
        background: transparent;
      }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-animation-delay: 1s; /* Safari support - any positive time runs instantly */
      -webkit-animation-name: autofill;
      -webkit-animation-fill-mode: both;
      -webkit-text-fill-color: ${theme.colors.white} !important;
      -webkit-background-clip: text;

      filter: none;
    }
  `}
`

export const InputMask = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    //remover aquele autofill do google que deixa azulzinho
    //o filter none é pra remover do firefox que tem filtro só lá
    @-webkit-keyframes autofill {
      0%,
      100% {
        color: #666;
        background: transparent;
      }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-animation-delay: 1s; /* Safari support - any positive time runs instantly */
      -webkit-animation-name: autofill;
      -webkit-animation-fill-mode: both;
      -webkit-text-fill-color: ${theme.colors.white} !important;
      -webkit-background-clip: text;

      filter: none;
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.bold};
    cursor: pointer;
  `}
`
export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.2rem;
    color: ${theme.colors.gray};
    & > svg {
      width: 100%;
    }
  `}
`

export const IconButton = styled.button`
  ${({ theme }) => css`
    border: 0;
    background: transparent;
    cursor: pointer;
    & > svg {
      color: ${theme.colors.primary};
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputLabelWrapper} {
      outline: 1.5px solid ${theme.colors.primary};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${InputLabelWrapper},
    ${Icon} {
      cursor: not-allowed;
      color: ${darken(0.15, theme.colors.gray)};
      background: ${darken(0.25, theme.colors.darkGray)};
      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  grid-gap: 0.5rem;
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
