import { ChevronRight, X } from '@styled-icons/feather'
import Button from 'components/Button'
import * as S from './styles'

export type ModalProps = {
  onDelete: () => void
  onReturn: () => void
}

const Modal = ({ onDelete, onReturn }: ModalProps) => (
  <S.ModalOverlay>
    <S.Wrapper>
      <S.ModalHeader>
        <S.Title>Deleção de usuário</S.Title>
        <Button
          icon={<X strokeWidth={4} width={'1rem'} />}
          iconGrey={true}
          onClick={onReturn}
        />
      </S.ModalHeader>
      <S.ContentWrapper>
        <S.Text>Tem certeza de que gostaria de deletar este usuario?</S.Text>
        <S.Alert>Essa ação não tem volta</S.Alert>
      </S.ContentWrapper>
      <S.ButtonGroup>
        <Button onClick={onDelete} minimalButton={true}>
          Deletar
        </Button>
        <Button
          onClick={onReturn}
          icon={<ChevronRight strokeWidth={4} width={'1rem'} />}
        >
          Voltar
        </Button>
      </S.ButtonGroup>
    </S.Wrapper>
  </S.ModalOverlay>
)

export default Modal
