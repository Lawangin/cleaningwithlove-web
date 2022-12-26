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
  const bgColor = style === 'secondary' ? 'white' : 'tertiary'
  const textColor = style === 'secondary' ? 'tertiary' : 'white'
  const hoverColor = style === 'secondary' ? 'hover:text-white' : ''
  const disabledStyle =
    'disabled:opacity-75 disabled:bg-gray-400 disabled:text-white disabled:border-gray-400 disabled:focus:outline-none'
  return (
    <div className={className}>
      <button
        type={type || 'submit'}
        className={`font-sans text-${textColor} bg-${bgColor} border-2 border-tertiary px-6 py-3 rounded-md 
        min-w-[7rem] hover:bg-primary hover:border-primary ${hoverColor} ${disabledStyle} max-sm:w-full`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  )
}
export default Button
