const NavBar = (): JSX.Element => {
  return (
    <div className='grid grid-cols-2 grid-rows-1'>
      <div>Logo</div>
      <div className='grid grid-cols-4 grid-rows-1'>
        <div>Book Now</div>
        <div>Home</div>
        <div>FAQ</div>
        <div>About Us</div>
      </div>
    </div>
  )
}

export default NavBar
