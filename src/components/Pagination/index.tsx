import { ChevronDown, ChevronLeft, ChevronRight } from '@styled-icons/feather'
import MediaMatch from 'components/MediaMatch'
import { useState } from 'react'
import * as S from './styles'

export type PaginationProps = {
  numberOfPages: number
  onPageChange?: (value: number) => void
}

const Pagination = ({ numberOfPages, onPageChange }: PaginationProps) => {
  const [page, setPage] = useState(1)

  function ValidateEnterPress(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      page && page <= numberOfPages ? onPageChange?.(page) : setPage(1)
    }
  }

  return (
    <>
      <MediaMatch greaterThan={'medium'}>
        <S.Wrapper>
          <S.Icon
            onClick={() => {
              page > 1 && setPage(page - 1)
              page > 1 && onPageChange?.(page - 1)
            }}
          >
            <ChevronLeft size={'1rem'} strokeWidth={3} />
          </S.Icon>
          <S.Input
            value={page}
            onChange={(e) => {
              // eslint-disable-next-line prettier/prettier
          (Number(e.currentTarget.value) || e.currentTarget.value === '') &&
                setPage(Number(e.currentTarget.value))
            }}
            onBlur={(e) => {
              const inputValue = Number(e.currentTarget.value)
              inputValue && inputValue <= numberOfPages
                ? onPageChange?.(Number(e.currentTarget.value))
                : setPage(1)
            }}
            onKeyUp={ValidateEnterPress}
          />
          <S.Text>de</S.Text> <S.Text>{numberOfPages}</S.Text>
          <S.Icon
            onClick={() => {
              page < numberOfPages && setPage(page + 1)
              page < numberOfPages && onPageChange?.(page + 1)
            }}
          >
            <ChevronRight size={'1rem'} strokeWidth={3} />
          </S.Icon>
        </S.Wrapper>
      </MediaMatch>
      {page < numberOfPages && (
        <MediaMatch lessThan={'medium'}>
          <S.WrapperMobile
            onClick={() => {
              page < numberOfPages && setPage(page + 1)
              page < numberOfPages && onPageChange?.(page + 1)
            }}
          >
            <S.TextMobile>Carregar mais</S.TextMobile>
            <S.IconMobile>
              <ChevronDown size={'1rem'} strokeWidth={3} />
            </S.IconMobile>
          </S.WrapperMobile>
        </MediaMatch>
      )}
    </>
  )
}

export default Pagination
