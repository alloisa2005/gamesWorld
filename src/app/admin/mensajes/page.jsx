import TablaMensajes from '@/components/TablaMensajes'
import { getAllMensajes } from '@/utils/mensajes/mensajes';
import React from 'react'

export const metadata = {
  title: "Menu Administrador | Mensajes",
  description: "Menu Administrador - Mensajes Page",
}

const Mensajes = async () => {

  const mensajes = await getAllMensajes(); 

  return (
    <div className='my-4 mb-10 font-montserrat'>      
       {
        mensajes && mensajes.length === 0 ? (
          <div className='text-center my-16'>
            <h2 className='font-bold text-[22px] mb-6'>No tiene mensajes.</h2>            
          </div>
        ) : <TablaMensajes data={mensajes} /> 
      }
    </div>
  )
}

export default Mensajes