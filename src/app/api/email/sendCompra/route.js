import { NextResponse } from 'next/server';
import { Resend } from 'resend'
import EmailCompraTemplate from '@/components/EmailTemplates/Email-compra-template';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const POST = async (req, res) => {

  const { email, nombre, direccion, cart, cartTotalItems, cartTotalAmount, envio, montoTotal } = await req.json();

  console.log('email', email);
  console.log('nombre', nombre);
  console.log('direccion', direccion);
  console.log('cart', cart);
  console.log('cartTotalItems', cartTotalItems);
  console.log('cartTotalAmount', cartTotalAmount);
  console.log('envio', envio);
  console.log('montoTotal', montoTotal);
  
  return NextResponse.json({ email, cart });

  // try {
  //   const data = await resend.emails.send({
  //     from: 'No Reply <onboarding@resend.dev>',
  //     to: [usuario.email],
  //     subject: 'GamesWorld - Gracias por su compra',
  //     react: EmailCompraTemplate({ compra, usuario }),
  //     text: '',
  //   });
    
  //   return NextResponse.json(data);
  // } catch (error) {
  //   return NextResponse.json({ error });
  // }
}