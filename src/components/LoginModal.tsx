import { Button } from "@material-tailwind/react";
import LoginCarousal from "../assets/LoginCarousal"
import { MdOutlinePhoneIphone } from "react-icons/md";
import LoginForm from "../assets/LoginForm";
import { IoCloseOutline } from "react-icons/io5";
interface Props {
    close: () => void
}
const LoginModal = ({ close }: Props) => {
    return (
        <div className="w-screen bg-black/50 z-50 top-0 fixed h-screen flex justify-center items-center">
            <div className="px-4 w-[400px] relative h-[650px] bg-white rounded-md overflow-hidden">
                <div className="flex justify-between items-center  pt-2 mb-0 pb-0">
                    <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-w4DG7" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
                    <p onClick={close} className="cursor-pointer -mr-1"><IoCloseOutline size={40} /></p>
                </div>
                <LoginCarousal />
                <div>
                    <div className=" flex font-[roboto] items-center text-center justify-center border-black border-2 h-14 mx-5 mb-3">
                        <MdOutlinePhoneIphone /> <p >Continue with Phone</p>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default LoginModal
