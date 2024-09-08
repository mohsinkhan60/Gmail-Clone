import { useEffect, useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setUser } from "../../../Redux/appSlice";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "@firebase/auth";
import { auth } from "../../../firebase";

export const Navbar = () => {
   const user = useSelector((state) => state.appSlice.user);
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const signOutHandler = () => {
   signOut(auth).then(() => {
      dispatch(setUser(null));
   }).catch((error) => {
      console.log(error);
   });
  }

  useEffect(() => {
    dispatch(setSearchText(input));
  }, [input]);

  return (
    <div className="flex items-center justify-between mx-3 h-16 relative">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <GiHamburgerMenu size={"20px"} />
          </div>
          <img
            className="w-10"
            src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-email-mail-application-vector-png-image_9183278.png"
            alt="img"
          />
          <h1 className="text-2xl font-medium text-gray-500">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size={"24px"} className="text-gray-700" />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Mail..."
            type="text"
            className="rounded-full w-full bg-transparent outline-none px-1"
          />
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <FaRegQuestionCircle size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoSettingsOutline size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <PiDotsNineBold size={"20px"} />
          </div>
          <div className="relative">
            <div className="cursor-pointer" onClick={() => setToggle(!toggle)}>
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={user?.photoURL}
                alt="img"
              />
            </div>
            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-16 right-2 z-20 bg-white p-3 rounded-lg shadow-lg cursor-pointer"
                >
                  <p onClick={signOutHandler}>LogOut</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
