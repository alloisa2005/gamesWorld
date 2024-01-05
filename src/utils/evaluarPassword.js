export const evaluarPassword = (password) => {
  // Verificar la longitud de la contraseña
  if (password.length < 6) {
    return 0; // Contraseña débil (menos de 6 caracteres)
  }

  // Verificar la presencia de caracteres especiales
  const caracteresEspeciales = /[!@#$%^&*(),.?":{}|<>]/;
  if (!caracteresEspeciales.test(password)) {
    return 1; // Contraseña débil (debe contener al menos un caracter especial)
  }

  // Verificar la presencia de números
  const tieneNumeros = /\d/.test(password);
  if (!tieneNumeros) {
    return 2; // Contraseña débil (debe contener al menos 1 número)
  }

  // Verificar la presencia de letras mayúsculas y minúsculas
  const tieneMayusculas = /[A-Z]/.test(password);
  const tieneMinusculas = /[a-z]/.test(password);  
  if (!tieneMayusculas && !tieneMinusculas) {
    return 3; // Contraseña débil (debe contener al menos una letra)
  }

  // Si la contraseña pasa todas las verificaciones, considerarla fuerte
  return 4; // Contraseña fuerte
}
