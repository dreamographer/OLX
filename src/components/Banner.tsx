
const Banner = () => {
  return (
      <div className='hidden xl:flex justify-around bg-[#f6f9f9] '>
        <img src="phone-app.webp" alt="" />
        <div className='border-r-2 w-80 flex flex-col  justify-center'>
        <h1 className='text-3xl font-medium'>TRY THE OLX APP</h1>
        <p>Buy, sell ans find just about anything using the app on your mobile</p>
        </div>
        <div className='flex flex-col justify-center p-10'>
              <p className='pb-4'>GET YOUR APP TODAY</p>
              <div className='flex gap-4'>
                <img src="appstore_2x.webp" alt="AppStore" />
                <img src="playstore_2x.webp" alt="PlayStore" />
              </div>
        </div>

    </div>

  )
}

export default Banner