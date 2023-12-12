import { connectDB } from "@/db/connectDB";
import Juego from "@/models/juego";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  const { juegoId } = params;  
  const { cant } = await req.json();  

  try {
    await connectDB();

    const juego = await Juego.findByIdAndUpdate(
      juegoId,
      { $inc: { stock: cant } },
      { new: true }
    );

    const juegos = await Juego.find();
    return NextResponse.json(juegos, { status: 201 });
  } catch (error) {
    return NextResponse.json({ msg: error.message }, { status: 400 });
  }
};
