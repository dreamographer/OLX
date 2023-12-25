import { IoLocationOutline } from "react-icons/io5";
import LocationSerch from "../assets/LocationSerch";
import ProductSearch from "../assets/ProductSearch";
interface Props{
    login:()=>void
}
const Header = ({login}:Props) => {
    return (
        <div className="flex h-16  p-5 justify-between items-center bg-[#eff1f3]">
            <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-w4DG7" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
           <LocationSerch />
            <ProductSearch/>
            <div className="cursor-pointer flex">
                <p className="pr-3">ENGLISH </p>
                <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-w4DG7" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
            </div>
            <div>
                <p onClick={login}  className=" cursor-pointer underline">Login</p>
            </div>
            <div>
                
           <button  className=" top-0 h-10 mx-2 px-4 border-2 rounded-full items-center border-slate-900 sell-button">
                    <p className="font-medium text-xl"><span className="font-bold text-2xl">+</span> SELL </p>
                    
                </button>
            </div>
                


        </div>
    )
}

export default Header