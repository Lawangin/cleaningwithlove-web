interface IProps {
  label: string
  price?: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({ label, price, checked, onChange }: IProps): JSX.Element => {
  // to add check, just pass checked into input className
  return (
    <div className='flex justify-center py-2'>
      <div>
        <div className='form-check'>
          <input
            className='h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
            type='checkbox'
            value=''
            id={`checkBox${label}`}
            checked={checked}
            onChange={onChange}
          />
          <label
            className='inline-block text-gray-800'
            htmlFor={`checkBox${label}`}
          >
            {label} <b>+${price}</b>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Checkbox
