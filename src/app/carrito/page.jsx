
import CarritoList from '@/components/CarritoList'
import CarritoTitle from '@/components/CarritoTitle'
import DetalleCompra from '@/components/DetalleCompra'
import MetodosPago from '@/components/MetodosPago'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'

export const metadata = {
  title: "Mi Carrito",
  description: "Carrito de usuario Page",
}

const Carrito =  async () => {  

  const session = await getServerSession(authOptions)  

  if(!session) {
    redirect('/tienda/categorias/all')
  }

  return (
    <div className='contenedor my-4 alturaMinima' >      
      <CarritoTitle />

      <div className='mt-3 flex flex-col-reverse lg:flex-row justify-between gap-3'>
        <div className='flex flex-col gap-3 w-full border rounded-md shadow-md p-2'>
          <CarritoList />
        </div>

        <div className='border rounded-md shadow-md w-full lg:w-[30%] p-2'>
           <p className='text-center text-xl font-bold'>Detalle de Compra</p>

           <MetodosPago />

           <DetalleCompra />
         </div>

      </div>
    </div>
  )
}

export default Carrito