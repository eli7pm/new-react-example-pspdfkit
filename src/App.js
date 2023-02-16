import PdfViewerComponent from './components/PdfViewerComponent';
import {useState} from "react";
import FileUploadButton from "./components/FileUploadButton"
import "./App.css"

function App() {
  const [document, setDocument] = useState("document.pdf");

  const handleDocumentUpload = (event)=>{
    const file = URL.createObjectURL(event.target.files[0]);
    setDocument(file);
  }
  return (
    <div className="App">
      <div className="PDF-viewer">
        <FileUploadButton handleDocumentUpload={handleDocumentUpload}/>
        <PdfViewerComponent
          document={document}
        />
      </div>
    </div>
  );
}

export default App;
