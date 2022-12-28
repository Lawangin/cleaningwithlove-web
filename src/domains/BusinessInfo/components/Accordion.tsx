import { useState } from 'react'

interface AccordionItem {
  title: string
  content: React.ReactNode
  top?: boolean
  bottom?: boolean
}

interface AccordionProps {
  items: AccordionItem[]
}

const Accordion = ({ items }: AccordionProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className='grid grid-cols-1 place-items-center'>
          <button
            onClick={() => handleClick(index)}
            className={`flex items-center justify-between p-4 w-full max-w-3xl text-black bg-gray-100 border ${
              item.top ? 'rounded-t-md' : ''
            } ${
              item.bottom ? 'rounded-b-md' : ''
            } outline-none focus:outline-none hover:bg-brandBlue`}
          >
            {item.title}
            <svg
              className='w-4 h-4 ml-2'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <polyline points='6 9 12 15 18 9'></polyline>
            </svg>
          </button>
          {activeIndex === index && (
            <div className='p-4 w-full max-w-3xl border'>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
