const CustomInputComponent = ({
  id,
  name,
  placeholder,
  ...props
}: any): JSX.Element => {
  // const errorStyling = errors[name] ? 'border-red-500' : ''

  return (
    <>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline`}
        type={name === 'phone' ? 'tel' : 'text'}
        {...props}
      />
    </>
  )
}

export default CustomInputComponent
