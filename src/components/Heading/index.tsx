import * as S from './styles'

export type HeadingProps = {
  title: string
}

const Heading = ({ title }: HeadingProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default Heading
