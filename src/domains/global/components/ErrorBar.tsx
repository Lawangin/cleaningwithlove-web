interface IProps {
  errorMessage: string
}

const ErrorBar = ({ errorMessage }: IProps): JSX.Element => {
  return (
    <div className='bg-red-300 text-black p-3 rounded-md flex items-center'>
      <div className='bg-red-500 rounded-full w-6 h-6 flex items-center justify-center'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 1000 1000'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='10' cy='10' r='10' fill='#C00' />

          <path
            fill='#FFF'
            d=' M 526 150C 576 150 602 175 601 224C 600 300 600 350 575 525C 570 560 560 575 525 575C 525 575 475 575 475 575C 440 575 430 560 425 525C 400 355 400 300 400 226C 400 175 425 150 475 150M 500 650C 527 650 552 661 571 679C 589 698 600 723 600 750C 600 805 555 850 500 850C 445 850 400 805 400 750C 400 723 411 698 429 679C 448 661 473 650 500 650C 500 650 500 650 500 650'
          />
        </svg>
      </div>
      <p className='px-2 font-bold'>Validation Error! </p>
      {errorMessage}
    </div>
  )
}

export default ErrorBar
