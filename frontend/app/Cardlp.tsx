// components/UploadCard.tsx
import { useState } from 'react';

const UploadCard = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setFileName(file.name);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile.name);
      // Add your file upload logic here (e.g., API call)
    } else {
      alert('No file selected.');
    }
  };

  return (
    <div className="card w-50 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Upload DRHP/RHP Document</h2>
        <p className="text-sm text-gray-500">Please upload a PDF file.</p>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full max-w-xs mt-4"
        />
        {selectedFile && (
          <p className="text-sm text-gray-500 mt-2">Selected file: {fileName}</p>
        )}
        <div className="card-actions justify-end mt-4">
          <button 
            onClick={handleUpload}
            className="btn btn-outline btn-primary"
            disabled={!selectedFile} 
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadCard;