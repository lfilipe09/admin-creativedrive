import * as S from './styles'
import Link from 'next/link'

export type EmptyProps = {
  imgSrc: string
  imgAlt: string
  redirectURL?: string
  text: string
}

const Empty = ({ imgAlt, imgSrc, redirectURL, text }: EmptyProps) => (
  <S.Wrapper>
    <S.Image src={imgSrc} alt={imgAlt} />
    <S.TextWrapper>
      <S.Text>{text}</S.Text>
      {!!redirectURL && (
        <Link href={redirectURL} passHref>
          <S.Link>Clique aqui</S.Link>
        </Link>
      )}
    </S.TextWrapper>
  </S.Wrapper>
)

export default Empty
