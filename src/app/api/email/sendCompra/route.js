import { NextResponse } from 'next/server';
import { Resend } from 'resend'
import EmailCompraTemplate from '@/components/EmailTemplates/Email-compra-template';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const POST = async (req, res) => {

  const { email, nombre, direccion, cart, cartTotalItems, cartTotalAmount, envio, montoTotal } = await req.json();  

  try {
    const data = await resend.emails.send({
      from: 'No Reply <onboarding@resend.dev>',
      to: [email],
      subject: 'GamesWorld - Gracias por su compra',
      react: EmailCompraTemplate({ email, nombre, direccion, cart, cartTotalItems, cartTotalAmount, envio, montoTotal }),
      text: '',
    });
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}