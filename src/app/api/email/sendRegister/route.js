import { NextResponse } from 'next/server';
import { Resend } from 'resend'
import EmailRegisterTemplate from '@/components/Email-register-template';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const POST = async (req, res) => {

  const { email, nombre, direccion } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'No Reply <onboarding@resend.dev>',
      to: [email],
      subject: 'Bienvenido/a a GamesWorld',
      react: EmailRegisterTemplate({ nombre, email, direccion }),
      text: '',
    });
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}