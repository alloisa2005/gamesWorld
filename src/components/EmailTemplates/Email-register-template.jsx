
const EmailRegisterTemplate = ({ nombre, email, direccion }) => (
  <div className="">
    <p>¡Hola {nombre}!</p>
    <p>Gracias por registrarte en nuestra web.</p>
    <div>
      <p>Estos son tus datos de registro:</p>
      <ul>
        <li>Nombre: <span style={{fontWeight:'bold'}}>{nombre}</span></li>
        <li>Email: <span style={{fontWeight:'bold'}}>{email}</span></li>
        <li>Dirección: <span style={{fontWeight:'bold'}}>{direccion}</span></li>
      </ul>
    </div>
    <br />
    <p>Esperamos que disfrutes de la experiencia.</p>
    <p>Un saludo,</p>
    <p>El equipo de <span style={{fontWeight:'bold'}}>GamesWorld</span></p>
    <br />
    
    <a href={process.env.NEXT_PUBLIC_API_URL}>
      <img src="https://firebasestorage.googleapis.com/v0/b/games-world-c68fd.appspot.com/o/logo2.png?alt=media&token=ac7acf31-5fd8-4e47-93ec-03b084c958cc"
         alt="Logo GamesWorld"  
         style={{width:'90px', height:'90px', objectFit:'cover'}}        
      />
      <p>GamesWorld</p>
    </a>

    <hr />
    <p>Este es un email automático, por favor no lo respondas.</p>

  </div>
);

export default EmailRegisterTemplate;