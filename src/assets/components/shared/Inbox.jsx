import { FaCaretDown } from "react-icons/fa"
import { IoMdMore, IoMdRefresh } from "react-icons/io"
import { MdCropSquare } from "react-icons/md"

  

export const Inbox = () => {
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} />
            <FaCaretDown size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdRefresh size={"20px "} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px "} />
          </div>
        </div>

      </div>
      <div className="h-[90vh] overflow-auto">
          <div className="flex items-center gap-1">

          </div>
        </div>
    </div>
  )
}
export default Inbox