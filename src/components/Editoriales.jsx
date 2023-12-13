import { editoriales } from '@/utils/editoriales'
import Image from 'next/image'
import React from 'react'

const Editoriales = () => {
  return (
    <div className='bg-black'>
      <div className='font-montserrat contenedor text-white py-10'>
        <p className='font-semibold italic text-[20px] md:text-2xl uppercase border-b border-white'>Principales Publishers</p>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-12 my-14'>
        {
          editoriales.map((editorial) => (
            <div key={editorial.id} className=''>
              <Image 
                src={editorial.img}
                alt={editorial.id}
                width={200}
                height={200}                
              />
            </div>
          ))
        }
        </div>

      </div>
    </div>
  )
}

export default Editoriales