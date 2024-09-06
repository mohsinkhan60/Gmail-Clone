import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./assets/components/shared/Navbar"
import Body from "./assets/components/shared/Body"
import Inbox from "./assets/components/shared/Inbox"
import Mail from "./assets/components/shared/Mail"

const router = createBrowserRouter([
  {
    path: "/",
    element:<Body />,
    children:[
      {
        path:"/",
        element:<Inbox />
      },
      {
        path:"/mail/:id",
        element:<Mail />
      }
    ]
  }
]) 

export const App = () => {
  return (
    <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  )
}
export default App