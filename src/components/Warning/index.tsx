import { AlertTriangle } from '@styled-icons/feather'
import * as S from './styles'

export type WarningAlertProps = {
  title: string
  icon?: JSX.Element
}

const WarningAlert = ({
  title,
  icon = <AlertTriangle strokeWidth={2} width={'1rem'} />
}: WarningAlertProps) => (
  <S.Wrapper>
    <S.Icon>{icon}</S.Icon>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default WarningAlert
