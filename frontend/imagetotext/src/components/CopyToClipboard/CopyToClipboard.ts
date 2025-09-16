
export const CopyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert("texto copiado");
  } catch (err) {
    console.error("Error copiando texto: ",err);
  }
}