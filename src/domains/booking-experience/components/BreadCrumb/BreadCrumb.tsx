import { useEffect, useState } from 'react'
import { useBookingContext } from '../../context/BookingContext'
import NextIcon from './NextIcon'

const BreadCrumb = (): JSX.Element => {
  const { pageName, setPageName } = useBookingContext()

  const [activePage, setActivePage] = useState({
    cleaning: true,
    personal: false,
    review: false
  })

  const handleClick = (name: string, e: any): void => {
    setPageName(name)

    e.preventDefault()
  }

  const shouldReviewBeDisabled = (): boolean => !activePage.review
  const shouldPersonalBeDisabled = (): boolean => activePage.cleaning

  useEffect(() => {
    if (pageName === 'cleaningInformation') {
      setActivePage({ cleaning: true, personal: false, review: false })
    }
    if (pageName === 'personalInformation') {
      setActivePage({ cleaning: false, personal: true, review: false })
    }
    if (pageName === 'reviewAndBook') {
      setActivePage({ cleaning: false, personal: false, review: true })
    }
  }, [pageName])

  return (
    <nav className='flex' aria-label='Breadcrumb'>
      <ol className='inline-flex items-center space-x-1 md:space-x-3'>
        <li className='inline-flex items-center' aria-current='page'>
          <button
            className={`inline-flex items-center text-sm font-medium ${
              activePage.cleaning
                ? 'text-primary max-sm:text-purple-800'
                : 'text-gray-700'
            } hover:text-gray-900 
            dark:text-gray-400 dark:hover:text-white`}
            onClick={(event) => handleClick('cleaningInformation', event)}
          >
            Cleaning Information
          </button>
        </li>
        <li>
          <div className='flex items-center'>
            <NextIcon />
            <button
              className={`inline-flex items-center text-sm font-medium ${
                activePage.personal
                  ? 'text-primary'
                  : activePage.cleaning
                  ? 'text-gray-500'
                  : 'text-gray-700'
              } hover:text-gray-900 
              dark:text-gray-400 dark:hover:text-white`}
              onClick={(event) => handleClick('personalInformation', event)}
              disabled={shouldPersonalBeDisabled()}
            >
              Personal Information
            </button>
          </div>
        </li>
        <li>
          <div className='flex items-center'>
            <NextIcon />
            <button
              className={`inline-flex items-center text-sm font-medium ${
                activePage.review ? 'text-primary' : 'text-gray-500'
              } hover:text-gray-900 
              dark:text-gray-400 dark:hover:text-white`}
              onClick={(event) => handleClick('reviewAndBook', event)}
              disabled={shouldReviewBeDisabled()}
            >
              Review & Book
            </button>
          </div>
        </li>
      </ol>
    </nav>
  )
}

export default BreadCrumb
