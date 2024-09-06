// components/pdfviewer/PDFViewer.js
import React, { useEffect } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

const PDFViewer = ({ file }) => {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  }, []);

  return (
    <div>
      <Document file={file}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PDFViewer;
