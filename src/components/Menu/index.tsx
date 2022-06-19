import * as S from './styles'
import Link from 'next/link'
import MediaMatch from 'components/MediaMatch'
import { Plus } from '@styled-icons/feather'

export type MenuItem = {
  label: string
  icon: JSX.Element
  url: string
}

export type MenuProps = {
  menuItems: MenuItem[]
  logoImageUrl: string
}

const Menu = ({ menuItems, logoImageUrl }: MenuProps) => (
  <>
    <MediaMatch greaterThan="medium">
      <S.Wrapper>
        <S.MenuListWrapper>
          {menuItems.map((menuItem) => (
            <S.MenuList key={menuItem.label}>
              <Link href={menuItem.url} passHref>
                <S.MenuLink>{menuItem.label}</S.MenuLink>
              </Link>
            </S.MenuList>
          ))}
        </S.MenuListWrapper>
        <Link href="/dashboard" passHref>
          <a>
            <S.Logo src={logoImageUrl} />
          </a>
        </Link>
      </S.Wrapper>
    </MediaMatch>
    <MediaMatch lessThan="medium">
      <S.FixedMenuWrapper>
        <S.FixedMenuItem>
          {menuItems.map((menuItem) => (
            <Link href={menuItem.url} passHref key={menuItem.label}>
              <S.FixedMenuLink>
                {menuItem.icon}
                {menuItem.label}
              </S.FixedMenuLink>
            </Link>
          ))}
        </S.FixedMenuItem>
        <Link href={'/create-user'} passHref>
          <S.PlusIcon>
            <Plus size={'1.5rem'} strokeWidth={3} />
          </S.PlusIcon>
        </Link>
      </S.FixedMenuWrapper>
    </MediaMatch>
  </>
)

export default Menu
