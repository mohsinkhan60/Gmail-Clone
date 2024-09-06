import { LuPencil } from "react-icons/lu"


export const Sidebar = () => {
  return (
    <div className="w-[15%]">
      <div className="p-3">
         <button className="flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]">
            <LuPencil size={"24px"} />
            Compose
         </button>
      </div>
    </div>
  )
}
export default Sidebar