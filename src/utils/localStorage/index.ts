import { Auth } from 'types/authTypes'
import { User } from 'types/userTypes'

const APP_KEY = '@creativeDrive'

export function getStorageItem(key: string) {
  //No Next via Server/Static não tem window, aí tem que verificar para não quebrar
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return JSON.parse(data!)
}

export function setStorageItem(key: string, value: Auth | User[]) {
  //No Next via Server/Static não tem window, aí tem que verificar para não quebrar
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}

export function removeStorageItem(key: string) {
  //No Next via Server/Static não tem window, aí tem que verificar para não quebrar
  if (typeof window === 'undefined') return

  window.localStorage.removeItem(`${APP_KEY}_${key}`)
}
