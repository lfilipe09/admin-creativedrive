import * as S from './styles'

export type HeroHeadingProps = {
  title: string
}

const HeroHeading = ({ title }: HeroHeadingProps) => {
  function formatHeroText(text: string) {
    let newTitle = ''
    let finalTag = false
    for (const char of text) {
      if (char === '*') {
        if (!finalTag) {
          newTitle += '<span>'
          finalTag = true
        } else {
          newTitle += '</span>'
          finalTag = false
        }
      } else {
        newTitle += char
      }
    }
    return newTitle
  }

  return (
    <S.Wrapper
      dangerouslySetInnerHTML={{ __html: formatHeroText(title) }}
    ></S.Wrapper>
  )
}

export default HeroHeading
