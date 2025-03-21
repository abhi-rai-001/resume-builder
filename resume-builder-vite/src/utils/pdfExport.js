import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const exportToPDF = async (elementId, fileName) => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error('Element not found');
    return;
  }

  const canvas = await html2canvas(element, {
    scale: 2, // Increase scale for better quality
    useCORS: true,
    logging: true,
    allowTaint: true
  });

  const imgData = canvas.toDataURL('image/png', 1.0);
  const pdf = new jsPDF('p', 'mm', 'a4');

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = canvas.width;
  const imgHeight = canvas.height;

  const ratio = imgWidth / imgHeight;
  const pdfImgWidth = pageWidth;
  const pdfImgHeight = pageWidth / ratio;

  let position = 0;

  if (pdfImgHeight > pageHeight) {
    position = (pdfImgHeight - pageHeight) / 2;
  }

  pdf.addImage(imgData, 'PNG', 0, -position, pdfImgWidth, pdfImgHeight);
  pdf.save(`${fileName}.pdf`);
};