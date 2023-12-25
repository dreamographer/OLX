
const ProductSearch = () => {
  return (
      <div className="flex xl:w-[40%] justify-center">
          <form>
              <div className="relative xl:w-96">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                  </div>
                  <input type="search" placeholder="Find Cars, Mobile..." id="default-search" className="border-[#002e35] h-10  focus:border-[#04b7fd] border-2  block w-full p-4 ps-10 text-sm text-gray-900 outline-none  rounded-s-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#002e35] dark:focus:border-[#002e35]" required />
                  <div className="absolute inset-y-0 end-3 flex items-center ps-3 pointer-events-none">

                  </div>
              </div>
          </form>
          <button type="submit" className="text-white h-13  bg-[#002e35] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-e-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
          </button>
      </div>
  )
}

export default ProductSearch