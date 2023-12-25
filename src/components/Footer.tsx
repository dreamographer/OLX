import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
const Footer = () => {
  return (
    <>
    <footer className="bg-gray-200 py-6">
      <div className="container mx-auto flex flex-wrap justify-around">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">TRENDING LOCATIONS</h3>
          <ul>
            <li>Bhubaneshwar</li>
            <li>Hyderabad</li>
            <li>Chandigarh</li>
            <li>Nashik</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">ABOUT US</h3>
          <ul>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">OLX</h3>
          <ul>
            <li>Help</li>
            <li>Sitemap</li>
            <li>Legal & Privacy information</li>
            <li>Vulnerability Disclosure Program</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">FOLLOW US</h3>
          <div className="flex">
          <CiFacebook size={30}/>
            <CiInstagram size={30} />
            <CiTwitter size={30} />
            <CiYoutube size={30} />
          </div>
          <div className='lg:flex gap-4 pt-5 '>
            <img className="h-[40px]" src="playstore_2x.webp" alt="PlayStore" />
            <img className="h-[40px]" src="appstore_2x.webp" alt="AppStore" />
          </div>
        </div>
      </div>
    </footer>
      <div className="bg-[#002e35] w-full  h-24 text-white flex justify-between ">
        <p  className="p-7">Help-Sitemap</p>
        <p className="p-7">All rights reserved © 2006-2023 OLX</p>
      </div>
    </>

  )
}

export default Footer