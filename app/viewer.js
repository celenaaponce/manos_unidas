import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the workerSrc for the updated PDF.js version
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@latest/build/pdf.worker.min.js`;

const PDFViewer = ({ url }) => {
  return (
    <div className="pdf-viewer-container" style={{ width: '100%', height: '100vh' }}>
      <div className="pdf-document-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <Document file={url}>
          <Page pageNumber={1} width={800} />
        </Document>
      </div>
    </div>
  );
};

export default PDFViewer;
