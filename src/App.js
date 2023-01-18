import { Viewer, Worker } from '@react-pdf-viewer/core';
import './App.css';
import file from './file.pdf'
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


function App() {
  return (
    <div className="App">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
        <div style={{ height: '750px' }}>
            <Viewer
                fileUrl={file}
            />
        </div>
    </Worker>
    </div>
  );
}

export default App;
