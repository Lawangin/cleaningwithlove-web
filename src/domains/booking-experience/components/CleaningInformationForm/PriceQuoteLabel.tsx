interface IProps {
  price: number
}

const PriceQuoteLabel = ({ price }: IProps): JSX.Element => {
  return (
    <div className='max-sm:px-2'>
      <p className='text-lg'>Estimated Price:</p>
      <p className='text-3xl font-bold'>${price}.00</p>
      <p className='text-sm max-w-lg py-4'>
        **Price is not final. This is only a rough estimate. We will contact you
        for a final quote.
      </p>
    </div>
  )
}

export default PriceQuoteLabel
