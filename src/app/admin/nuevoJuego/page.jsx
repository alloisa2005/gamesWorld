import NuevoJuegoForm from '@/components/NuevoJuegoForm'
import React from 'react'

export const metadata = {
  title: "Menu Administrador | Nuevo Producto",
  description: "Menu Administrador - Nuevo Producto Page",
}

const NuevoJuego = () => {
  return (
    <div className='w-full'>
      <NuevoJuegoForm />
    </div>
  )
}

export default NuevoJuego