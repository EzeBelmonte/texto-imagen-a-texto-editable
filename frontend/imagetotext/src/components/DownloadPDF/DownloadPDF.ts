import jsPDF from "jspdf";

function DownloadPDF(text: string) {
  const doc = new jsPDF();
  doc.text(text, 10, 10);
  doc.save('resultado.pdf');
}

export default DownloadPDF;