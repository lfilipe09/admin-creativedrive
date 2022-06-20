import * as S from './styles'
import Link from 'next/link'
import MediaMatch from 'components/MediaMatch'
import { Plus } from '@styled-icons/feather'
import { DefaultBreakpoints } from 'styled-media-query'
import { removeStorageItem } from 'utils/localStorage'
import { useRouter } from 'next/router'

export type MenuItem = {
  label: string
  icon: JSX.Element
  url: string
}

export type MenuProps = {
  menuItems: MenuItem[]
  logoImageUrl: string
  Breakpoint?: keyof DefaultBreakpoints
}

const Menu = ({
  menuItems,
  logoImageUrl,
  Breakpoint = 'medium'
}: MenuProps) => {
  const routes = useRouter()
  const { push } = routes
  return (
    <>
      <MediaMatch greaterThan={Breakpoint}>
        <S.Wrapper>
          <S.MenuListWrapper>
            {menuItems.map((menuItem) => (
              <S.MenuList key={menuItem.label}>
                {menuItem.label === 'Logout' ? (
                  <S.MenuLinkButton
                    onClick={() => {
                      removeStorageItem('auth')
                      push('/')
                    }}
                    isPrimary={true}
                  >
                    {menuItem.label}
                  </S.MenuLinkButton>
                ) : (
                  <Link href={menuItem.url} passHref>
                    <S.MenuLink>{menuItem.label}</S.MenuLink>
                  </Link>
                )}
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
      <MediaMatch lessThan={Breakpoint}>
        <S.FixedMenuWrapper>
          <S.FixedMenuItem>
            {menuItems.map((menuItem) => (
              <>
                {menuItem.label === 'Logout' ? (
                  <S.FixedMenuButton
                    onClick={() => {
                      removeStorageItem('auth')
                      push('/')
                    }}
                  >
                    {menuItem.icon}
                    {menuItem.label}
                  </S.FixedMenuButton>
                ) : (
                  <Link href={menuItem.url} passHref key={menuItem.label}>
                    <S.FixedMenuLink>
                      {menuItem.icon}
                      {menuItem.label}
                    </S.FixedMenuLink>
                  </Link>
                )}
              </>
            ))}
          </S.FixedMenuItem>
          <Link href={'/criar-usuario'} passHref>
            <S.PlusIcon>
              <Plus size={'1.5rem'} strokeWidth={3} />
            </S.PlusIcon>
          </Link>
        </S.FixedMenuWrapper>
      </MediaMatch>
    </>
  )
}

export default Menu
