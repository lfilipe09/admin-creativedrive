import React, { useState, useEffect } from 'react'
import ReactInputMask from 'react-input-mask'

export type InputMaskProps = {
  mask: string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: () => void
  onBlur?: () => void
  children?: React.ReactNode
}

const InputMaskHydrated = ({ children, ...props }: InputMaskProps) => {
  const [showChild, setShowChild] = useState(false)

  // Wait until after client-side hydration to show
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    // You can show some kind of placeholder UI here
    return null
  }

  return <ReactInputMask {...props}>{children}</ReactInputMask>
}

export default InputMaskHydrated
