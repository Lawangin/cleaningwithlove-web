import { Component, CSSProperties, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  color?: string
  bkg?: string
}
const ContainerWrapper = ({ color, children, bkg }: IProps) => {
  return (
    <section
      className={!color ? 'bg-slate-400' : color}
      style={{ backgroundImage: `url(${bkg})` }}
    >
      <div className='max-w-screen-xl mx-auto'>{children}</div>
    </section>
  )
}

export default ContainerWrapper
