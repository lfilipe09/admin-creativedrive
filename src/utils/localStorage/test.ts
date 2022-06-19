import { getStorageItem, setStorageItem } from '.'

describe('getStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should return the item from localstorage', () => {
    window.localStorage.setItem(
      '@creativeDrive_cartItems',
      JSON.stringify(['1', '2'])
    )

    expect(getStorageItem('cartItems')).toStrictEqual(['1', '2'])
  })
})

describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should add the item to localStorage', () => {
    setStorageItem('cartItems', { token: '', time: '' })

    expect(
      window.localStorage.getItem('@creativeDrive_cartItems')
    ).toStrictEqual(JSON.stringify({ token: '', time: '' }))
  })
})
