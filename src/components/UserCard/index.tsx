import { Edit3, Trash2 } from '@styled-icons/feather'
import Button from 'components/Button'
import Modal from 'components/Modal'
import { useState } from 'react'
import * as S from './styles'

export type UserCardProps = {
  name: string
  creationDate: string
  role: string
  email: string
  activity: string
  imgUrl?: string
  imgAlt?: string
  onEditData?: (userEmail: string) => void
  onDeleteData?: (userEmail: string) => void
}

const UserCard = ({
  activity,
  creationDate,
  email,
  imgUrl = '/img/empty-profile-pic.png',
  imgAlt = 'Empty Photo',
  name,
  role,
  onEditData,
  onDeleteData
}: UserCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <S.Modal isOpen={isModalOpen}>
        <Modal
          onReturn={() => {
            setIsModalOpen(false)
          }}
          onDelete={() => {
            onDeleteData?.(email)
            setIsModalOpen(false)
          }}
        />
      </S.Modal>
      <S.Wrapper>
        <S.Date>Criado em {creationDate}</S.Date>
        <S.UserWrapper>
          <S.Image src={imgUrl} alt={imgAlt} />
          <S.TextWrapper>
            <S.Name>{name}</S.Name>
            <S.Role>{role}</S.Role>
            <S.Email>{email}</S.Email>
            <S.Activity>{activity}</S.Activity>
          </S.TextWrapper>
          <S.Icons>
            <Button
              onClick={() => onEditData?.(email)}
              icon={<Edit3 strokeWidth={1} width={'1rem'} />}
            />
            <Button
              onClick={() => setIsModalOpen(true)}
              icon={<Trash2 strokeWidth={1} width={'1rem'} />}
              iconGrey={true}
            />
          </S.Icons>
        </S.UserWrapper>
      </S.Wrapper>
    </>
  )
}

export default UserCard
