import { ChevronDown, ChevronUp } from '@styled-icons/feather'
import { useEffect, useState } from 'react'
import * as S from './styles'

export type DropdownProps = {
  onDropdownChange?: (value: string) => void
  minimal?: boolean
  options: string[]
  initialValue?: string
  label?: string
  icon?: React.ReactNode
  disabled?: boolean
  dropdownHeight?: 'big' | 'small'
}

const Dropdown = ({
  icon,
  dropdownHeight = 'big',
  minimal = false,
  label,
  options,
  initialValue = '',
  onDropdownChange
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(initialValue ? initialValue : options[0])
  const [restOptions, setRestOptions] = useState(
    options.filter((option) => option !== initialValue)
  )

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <S.DropdownParentWrapper>
      <S.DropdownLabelWrapper
        isOpen={isOpen}
        minimal={minimal}
        dropdownHeight={dropdownHeight}
        type={'button'}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <S.DropdownWrapper>
          {!!label && <S.Label>{label}</S.Label>}
          <S.DropdownTextWrapper dropdownHeight={dropdownHeight}>
            {value}
            <S.ArrowIcon>
              {isOpen ? (
                <ChevronUp size={'1rem'} strokeWidth={3} />
              ) : (
                <ChevronDown size={'1rem'} strokeWidth={3} />
              )}
            </S.ArrowIcon>
          </S.DropdownTextWrapper>
        </S.DropdownWrapper>
        {!!icon && <S.Icon>{icon}</S.Icon>}
      </S.DropdownLabelWrapper>
      <S.DropdownPanel
        isOpen={isOpen}
        minimal={minimal}
        dropdownHeight={dropdownHeight}
      >
        {restOptions.map((option) => {
          return (
            <S.OptionLine
              dropdownHeight={dropdownHeight}
              key={option}
              onClick={() => {
                setValue(option)
                onDropdownChange?.(option)
                setIsOpen(false)
                setRestOptions(
                  options.filter((initialOption) => initialOption !== option)
                )
              }}
            >
              {option}
            </S.OptionLine>
          )
        })}
      </S.DropdownPanel>
    </S.DropdownParentWrapper>
  )
}
export default Dropdown
