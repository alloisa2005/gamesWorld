
export const sendRegisterEmail = async (email, nombre, direccion) => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/email/sendRegister`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, nombre, direccion }),
  });  

};

export const sendCompraEmail = async (compra, usuario) => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/email/sendCompra`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ compra, usuario }),
  });  

};