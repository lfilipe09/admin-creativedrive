import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  iconGrey?: boolean
  minimalButton?: boolean
  borderButton?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  icon,
  iconGrey,
  minimalButton,
  borderButton,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    iconGrey={iconGrey}
    minimalButton={minimalButton}
    hasIcon={!!icon}
    borderButton={borderButton}
    {...props}
  >
    {!!children && <span>{children}</span>}
    {icon}
  </S.Wrapper>
)
export default Button
