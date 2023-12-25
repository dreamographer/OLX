import { IoLocationOutline } from "react-icons/io5";
const Header = () => {
    return (
        <div className="flex h-16  p-5 justify-between items-center bg-[#eff1f3]">
            <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-w4DG7" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
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
            <div className="flex w-[40%] justify-center">
                <form>
                    <div className="relative w-96">
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
            <div className="cursor-pointer flex">
                <p className="pr-3">ENGLISH </p>
                <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-w4DG7" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
            </div>
            <div>
                <p className="underline">Login</p>
            </div>
            <div>
                
           <button className=" top-0 h-10 mx-2 px-4 border-2 rounded-full items-center border-slate-900 sell-button">
                    <p className="font-medium text-xl"><span className="font-bold text-2xl">+</span> SELL </p>
                    
                </button>
            </div>
                


        </div>
    )
}

export default Header