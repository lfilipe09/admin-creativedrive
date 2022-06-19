import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react'
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

const Button: React.ForwardRefRenderFunction<ButtonProps, ButtonProps> = (
  { children, icon, iconGrey, minimalButton, borderButton, ...props },
  ref
) => (
  <S.Wrapper
    iconGrey={iconGrey}
    minimalButton={minimalButton}
    hasIcon={!!icon}
    borderButton={borderButton}
    ref={ref}
    {...props}
  >
    {!!children && <span>{children}</span>}
    {icon}
  </S.Wrapper>
)
export default forwardRef(Button)
