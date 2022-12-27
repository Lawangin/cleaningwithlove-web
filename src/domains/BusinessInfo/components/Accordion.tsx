import { useState } from 'react'

interface AccordionItem {
  title: string
  content: React.ReactNode
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
    <div className='p-32'>
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => handleClick(index)}
            className='flex items-center justify-between p-4 w-full max-w-3xl text-black bg-gray-100 border rounded-t-md outline-none focus:outline-none hover:bg-brandBlue'
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
