import { connectDB } from "@/db/connectDB";
import Cart from "@/models/cart";
import Compra from "@/models/compra";
import { NextResponse } from "next/server";


export const POST = async (req, res) => {

  const { usuarioEmail, productos, cantidadProductos, subTotal, envio, montoTotal } = await req.json();  

  try {
     await connectDB();

    const compra = new Compra({email: usuarioEmail, productos, cantidadProductos, subTotal,
      envio, montoTotal });
    await compra.save();
    
    //Borro el carrito del usuario
    await Cart.findOneAndDelete({ email: usuarioEmail });

    let compras = await Compra.find({ email: usuarioEmail }).populate("productos.producto").sort({ createdAt: -1 });        
    return NextResponse.json(compras, { status: 201 });
    //return NextResponse.json({msg: 'OK Compra'}, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

}