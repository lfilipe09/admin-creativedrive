import { Eye, EyeOff } from '@styled-icons/feather'
import { useState, InputHTMLAttributes } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  minimal?: boolean
  password?: boolean
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  outsideIcon?: boolean
  disabled?: boolean
  error?: string
  inputHeight?: 'big' | 'small'
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  icon,
  label,
  inputHeight = 'big',
  minimal = false,
  outsideIcon = false,
  password = false,
  initialValue = '',
  error,
  name,
  disabled = false,
  onInputChange,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)
  const [visiblePassword, setVisiblePassword] = useState(false)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)
    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      <div style={{ display: 'flex' }}>
        {!!icon && outsideIcon && <S.Icon>{icon}</S.Icon>}
        <S.InputLabelWrapper minimal={minimal} inputHeight={inputHeight}>
          <S.InputWrapper>
            {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
            <S.Input
              type={password && !visiblePassword ? 'password' : 'text'}
              onChange={onChange}
              value={value}
              disabled={disabled}
              name={name}
              inputHeight={inputHeight}
              {...(label ? { id: name } : {})}
              {...props}
            />
          </S.InputWrapper>
          {password && value.length > 0 ? (
            <S.IconButton onClick={() => setVisiblePassword(!visiblePassword)}>
              {visiblePassword ? (
                <EyeOff size={'1rem'} />
              ) : (
                <Eye size={'1rem'} />
              )}
            </S.IconButton>
          ) : (
            !!icon && !outsideIcon && <S.Icon>{icon}</S.Icon>
          )}
        </S.InputLabelWrapper>
      </div>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
export default TextField
