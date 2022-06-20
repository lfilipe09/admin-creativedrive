import styled, { css } from 'styled-components'

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`
export type ModalProps = { isOpen: boolean }
export const Modal = styled.div<ModalProps>`
  ${({ isOpen }) => css`
    display: ${isOpen ? 'block' : 'none'};
  `}
`

export const TableLine = styled.tr`
  ${({ theme }) => css`
    height: 3rem;
    border-bottom: 0.5px solid ${theme.colors.darkGray};
  `}
`

export const TableBodyLine = styled.tbody``

export const TableHeadLine = styled.thead``

export const TableHead = styled.th`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-weight: ${theme.font.bold};
    padding: 10px;
  `}
`
export const TableCell = styled.td`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
  `}
`

export const ImageWrapper = styled.div`
  > span {
    object-fit: cover;
    border-radius: 50%;
  }
`

export const Icons = styled.div`
  display: flex;
  grid-gap: 1rem;
`
