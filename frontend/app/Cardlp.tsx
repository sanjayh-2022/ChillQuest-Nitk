"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const UploadCard = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && (file.type === "application/pdf" || file.type === "application/json")) {
      setSelectedFile(file);
      setFileName(file.name);
    } else {
      alert("Please upload a valid PDF or JSON file.");
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await fetch("https://fec5-34-19-99-16.ngrok-free.app/analyze", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const responseData = await response.json(); // Assuming the API sends JSON.
          alert("File uploaded successfully.");
          router.push(`/landingpage?data=${encodeURIComponent(JSON.stringify(responseData))}`);
        } else {
          alert("Failed to upload file.");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("An error occurred while uploading the file.");
      }
    } else {
      alert("No file selected.");
    }
  };

  return (
    <div className="card w-50 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Upload DRHP/RHP Document</h2>
        <p className="text-sm text-gray-500">Please upload a PDF or JSON file.</p>
        <input
          type="file"
          accept=".pdf,.json"
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
