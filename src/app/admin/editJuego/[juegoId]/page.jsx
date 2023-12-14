import EditJuegoForm from '@/components/EditJuegoForm'
import { getProductoById } from '@/utils/juegos/juegos';
import React from 'react'

export const metadata = {
  title: "Menu Administrador | Editar Producto",
  description: "Menu Administrador - Editar Producto Page",
}

const EditJuego = async ({ params }) => {

  const {juegoId} = params;
  const game = await getProductoById(juegoId);

  return (
    <div className='w-full'>      
      <EditJuegoForm game={game} />
    </div>
  )
}

export default EditJuego