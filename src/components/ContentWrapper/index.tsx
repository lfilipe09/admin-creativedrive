import { ChevronRight } from '@styled-icons/feather'
import Button from 'components/Button'
import Link from 'next/link'
import { ReactNode } from 'react'
import * as S from './styles'

export type ContentWrapperProps = {
  title?: string
  children: ReactNode
  topIcon?: JSX.Element
  rightButtonText?: string
  OnRightButtonClick?: () => void
  RedirectUrlRightButton?: string
  leftButtonText?: string
  RedirectUrlLeftButton?: string
  size?: 'small' | 'big'
}

const ContentWrapper = ({
  title,
  children,
  OnRightButtonClick,
  RedirectUrlLeftButton,
  RedirectUrlRightButton,
  leftButtonText,
  rightButtonText,
  size = 'big',
  topIcon
}: ContentWrapperProps) => {
  return (
    <div style={{ width: '100%' }}>
      <S.Title>{title}</S.Title>
      <S.Wrapper isText={!!title}>
        {!!topIcon && <S.Icon size={size}>{topIcon}</S.Icon>}
        <S.ChildrenWrapper size={size}>{children}</S.ChildrenWrapper>
        <S.ButtonGroup size={size}>
          {!!RedirectUrlLeftButton && (
            <Link href={RedirectUrlLeftButton ?? '/'} passHref>
              <Button as="a" minimalButton={true}>
                {leftButtonText}
              </Button>
            </Link>
          )}
          {!!RedirectUrlRightButton && (
            <Link href={RedirectUrlRightButton} passHref>
              <Button
                as="a"
                icon={<ChevronRight strokeWidth={4} width={'1rem'} />}
              >
                {rightButtonText}
              </Button>
            </Link>
          )}
          {!!OnRightButtonClick && (
            <Button
              onClick={OnRightButtonClick}
              icon={<ChevronRight strokeWidth={4} width={'1rem'} />}
            >
              {rightButtonText}
            </Button>
          )}
        </S.ButtonGroup>
      </S.Wrapper>
    </div>
  )
}

export default ContentWrapper
