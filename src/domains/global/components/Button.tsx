import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
  className?: string
  onClick?: (e: any) => void
  style?: string
  disabled?: boolean
}

const Button = ({
  children,
  type,
  className,
  onClick,
  style,
  disabled
}: IProps): JSX.Element => {
  const disabledStyle =
    'disabled:opacity-75 disabled:bg-gray-400 disabled:text-white disabled:border-gray-400 disabled:focus:outline-none'
  const styling =
    style === 'secondary'
      ? `font-sans max-sm:w-full text-tertiary bg-white border-2 border-tertiary px-6 py-3 rounded-md min-w-[7rem] hover:bg-primary hover:border-primary hover:text-white ${disabledStyle}`
      : `font-sans max-sm:w-full text-white bg-tertiary border-2 border-tertiary px-6 py-3 rounded-md min-w-[7rem] hover:bg-primary hover:border-primary hover:text-white ${disabledStyle}`
  return (
    <div className={className}>
      <button
        type={type || 'submit'}
        className={styling}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  )
}
export default Button
