import { IoLocationOutline } from 'react-icons/io5'

const LocationSerch = () => {
  return (
      <div>
          <form>
              <div className="relative  ">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <IoLocationOutline size={20} />
                  </div>
                  <input type="search" id="default-search" className="block border-[#002e35] h-10  focus:border-[#04b7fd] w-full p-4 ps-10 text-sm text-gray-900 border-2 outline-none rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#002e35] dark:focus:border-[#002e35]" required />
                  <div className="absolute inset-y-0 end-3 flex items-center ps-3 pointer-events-none">
                      <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-w4DG7" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>

                  </div>
              </div>
          </form>
      </div>
  )
}

export default LocationSerch