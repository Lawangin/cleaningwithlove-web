import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Button = ({ children }: Props): JSX.Element => {
  return (
    <button className='font-sans text-white bg-tertiary px-4 py-2 rounded-full hover:bg-primary'>
      {children}
    </button>
  )
}
export default Button
