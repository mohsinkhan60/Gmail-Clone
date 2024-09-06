import Navbar from "./assets/components/shared/Navbar"
import Sidebar from "./assets/components/shared/Sidebar"


export const App = () => {
  return (
    <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
      <Navbar />
      <Sidebar />
    </div>
  )
}
export default App