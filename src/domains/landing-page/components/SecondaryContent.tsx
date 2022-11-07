const SecondaryContent = (): JSX.Element => {
  return (
    <div>
      <div className='grid grid-cols-2 grid-rows-1'>
        <div>Image</div>
        <div>Text</div>
      </div>
      <div className='grid grid-cols-3 grid-rows-1'>
        <div>Small Image #1</div>
        <div>Small Image #2</div>
        <div>Small Image #3</div>
      </div>
    </div>
  )
}

export default SecondaryContent
