import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import { Outlet } from 'react-router'

export const ProfileLayout = () => {
  return (
    <div>

        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}
