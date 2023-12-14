import React from 'react'

export const metadata = {
  title: "Menu Administrador | Estadísticas",
  description: "Menu Administrador - Estadísticas Page",
}

const EstadisticasLayout = ({ userMasCompras, comprasMes, juegosmasvendidos }) => {  

  return (
    <div className='grid grid-cols-8 grid-rows-2 gap-3 h-[500px] mb-5'>  
      { comprasMes }  
      { userMasCompras }
      { juegosmasvendidos }
    </div>
  )
}

export default EstadisticasLayout 