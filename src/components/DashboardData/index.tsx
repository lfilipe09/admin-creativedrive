import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

export type DashboardDataProps = {
  dataNumber?: number
  title: string
  icon?: JSX.Element
  isActive?: boolean
}

const DashboardData = ({
  dataNumber,
  icon,
  isActive = true,
  title
}: DashboardDataProps) => (
  <S.Wrapper>
    <S.BigNumber isActive={isActive}>{dataNumber}</S.BigNumber>
    <S.InfoContentWrapper>
      <MediaMatch lessThan={'medium'}>
        <S.Icon>{icon}</S.Icon>
      </MediaMatch>
      <S.Title>{title}</S.Title>
      {isActive && (
        <S.Subtitle>
          {dataNumber === 1 ? 'ativo' : 'ativos '} na plataforma
        </S.Subtitle>
      )}
    </S.InfoContentWrapper>
  </S.Wrapper>
)

export default DashboardData
