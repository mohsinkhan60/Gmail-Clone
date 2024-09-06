
import { FaRegQuestionCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
         <div className="flex items-center gap-2">
            <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer ">
               <GiHamburgerMenu size={"20px"} />
            </div>
            <img className="w-10" src={"https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-email-mail-application-vector-png-image_9183278.png"} alt="img" />
            <h1 className="text-2xl font-medium text-gray-500">Gmail</h1>
         </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60 ">
         <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
            <IoIosSearch size={"24px"} className="text-gray-700" />
            <input placeholder="Search Mail..." type="text" className="rounded-full w-full bg-transparent outline-none px-1" />
         </div>
      </div>
      <div className="md:block hidden ">
         <div className="flex items-center gap-2">
            <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <FaRegQuestionCircle size={"20px"} />
            </div>
            <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoSettingsOutline  size={"20px"} />
            </div>
            <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <PiDotsNineBold size={"20px"} />
            </div>
            <div className="cursor-pointer">
               <img className="w-10 h-10 rounded-full object-cover" src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="img" />
            </div>
         </div>
         
      </div>
    </div>
  )
}
export default Navbar