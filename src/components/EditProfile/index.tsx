import Button from 'components/Button'
import * as S from './styles'

export type EditProfileProps = {
  onDisable: () => void
  profilePicUrl?: string
}

const EditProfile = ({ onDisable, profilePicUrl }: EditProfileProps) => (
  <S.Wrapper>
    <S.Image src={profilePicUrl ?? '/img/empty-profile-pic.png'} />
    <Button borderButton={true}>Fazer Upload</Button>
    <Button onClick={onDisable} borderButton={true}>
      Desativar usuario
    </Button>
  </S.Wrapper>
)

export default EditProfile
