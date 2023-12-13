import AdminMenuList from '@/components/AdminMenuList'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: "Admin",
  description: "Home page",
}

const AdminLayout = ({children}) => {
  return (
    <>
      <div className='md:hidden alturaMinima w-full px-4 flex flex-col items-center mt-20 font-montserrat'>
        <Image
           src={'/images/device.png'} 
           alt='Device Error'
           width={300}
           height={300}
           className='object-contain w-[350px] h-[350px]'
           />           
        
        <p className='text-md mb-3 font-bold'>Parece que estás en un dispositivo móvil.</p>        
        <p className='text-sm text-center font-semibold'>Intenta de nuevo desde un dispositivo de escritorio.</p>        
      </div>    

      <div className='hidden md:block contenedor mt-3 alturaMinima'>
        
        <AdminMenuList />

        {children}
      </div>
    </>
  )
}

export default AdminLayout