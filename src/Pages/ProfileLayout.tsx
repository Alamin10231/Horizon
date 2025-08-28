import Navbar from '@/components/Navbar/Navbar'

import { Outlet } from 'react-router'

export const ProfileLayout = () => {
  return (
    <div>

        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}
