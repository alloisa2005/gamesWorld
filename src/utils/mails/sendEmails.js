
export const sendRegisterEmail = async (email, nombre, direccion) => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/email/sendRegister`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, nombre, direccion }),
  });

  // if(!res.ok) {
  //   const data = await response.json();
  //   return {error:true, errorMsg: data.msg, data: ''};    
  // }

  // const data = await res.json();
  // return {error:false, errorMsg: '', data};

};

export const sendCompraEmail = async (email, nombre, direccion) => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/email/sendCompra`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, nombre, direccion }),
  });

  // if(!res.ok) {
  //   const data = await response.json();
  //   return {error:true, errorMsg: data.msg, data: ''};    
  // }

  // const data = await res.json();
  // return {error:false, errorMsg: '', data};

};