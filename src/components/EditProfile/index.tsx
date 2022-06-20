import Button from 'components/Button'
import * as S from './styles'

export type EditProfileProps = {
  onDisable?: () => void
  profilePicUrl?: string
  textDisable?: string
}

const EditProfile = ({
  onDisable,
  profilePicUrl,
  textDisable = 'Desativar usuario'
}: EditProfileProps) => (
  <S.Wrapper>
    <S.Image src={profilePicUrl ?? '/img/empty-profile-pic.png'} />
    <Button borderButton={true}>Fazer Upload</Button>
    {!!onDisable && (
      <Button onClick={onDisable} borderButton={true}>
        {textDisable}
      </Button>
    )}
  </S.Wrapper>
)

export default EditProfile
