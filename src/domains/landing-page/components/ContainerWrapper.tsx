import { Component, ReactNode } from 'react'

interface Props {
  children?: ReactNode
  color?: string
}
const ContainerWrapper = ({ color, children }: Props) => {
  return (
    <div className={!color ? 'bg-slate-400' : color}>
      <div className='max-w-screen-xl mx-auto'>{children}</div>
    </div>
  )
}

export default ContainerWrapper
