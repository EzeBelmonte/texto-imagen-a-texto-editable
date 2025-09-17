
/* 
  - Toda función marcada con async siempre devuelve una promesa, aunque no se escriba explícitamente new Promise().
  - En este caso, la promesa resuelve a un objeto Response (el que devuelve fetch) o null (si no hay formData).
  - El uso de promesa es porque fetch es asíncrono, no se sabe de inmediato la respuesta del backend, 
    entonces la función devuelve una promesa que “espera” la respuesta.
 */
async function SendFiles(formData: FormData | null): Promise<Response | null> {
  
  if (!formData) return null;

  const res = await fetch('/procesar', { // Para producción
    method: 'POST',
    body: formData
  });

  return res;
};

export default SendFiles;
