import { Component, CSSProperties, ReactNode } from 'react'

interface Props {
  children?: ReactNode
  color?: string
  bkg?: string
}
const ContainerWrapper = ({ color, children, bkg }: Props) => {
  return (
    <div
      className={!color ? 'bg-slate-400' : color}
      style={{ backgroundImage: `url(${bkg})` }}
    >
      <div className='max-w-screen-xl mx-auto'>{children}</div>
    </div>
  )
}

export default ContainerWrapper
