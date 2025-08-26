// import { Navbar } from "@/components/Navbar/Navbar"
// import Navbar from "@/components/Navbar/Navbar"
import Navbar from "@/components/Navbar/Navbar"
import { Outlet } from "react-router"
import { Footer } from "./Footer"





export const MainLayout = () => {
  return (
    <div>
      {/* <NavigationMenuSub></NavigationMenuSub> */}
  
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    
    
     
    </div>
  )
}
