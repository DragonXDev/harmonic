"use client";
import React, { useState, useRef } from "react";
import { MdFileUpload } from "react-icons/md";
import Card from "../../components/card";
import LineChartCard from "./LineChartCard";

interface UploadProps {
  onDataReceived: (data: any) => void; // Define the prop for onDataReceived
}

const Upload: React.FC<UploadProps> = ({ onDataReceived }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setAnalysisResult(null);
      console.log("File selected:", file.name);
    }
  };

  const handlePublish = async () => {
    if (selectedFile) {
      console.log("Publishing file:", selectedFile.name);
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await fetch("http://localhost:3001/analyze", {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        console.log("Analysis result:", result);
        setAnalysisResult(result);
        onDataReceived(result);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      console.log("No file selected");
      fileInputRef.current?.click();
    }
  };

  return (
    <>
      <Card className="grid h-full w-full grid-cols-1 gap-3 rounded-[20px] bg-white bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none 2xl:grid-cols-11">
        <div className="col-span-5 h-full w-full rounded-xl bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6">
          <label
            htmlFor="file-upload"
            className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3 dark:!border-navy-700 lg:pb-0"
          >
            <MdFileUpload className="text-[80px] text-brand-500 dark:text-white" />
            <h4 className="text-xl font-bold text-brand-500 dark:text-white">
              Upload Files
            </h4>
            <p className="mt-2 text-sm font-medium text-gray-600">
              MP3, MP4, and MSCZ files are allowed
            </p>
            <input
              ref={fileInputRef}
              id="file-upload"
              type="file"
              accept=".mp3,.mp4,.mscz"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </label>
        </div>

        <div className="col-span-5 flex h-full w-full flex-col justify-center overflow-hidden rounded-xl bg-white pl-3 pb-4 dark:!bg-navy-800">
          <h5 className="text-left text-xl font-bold leading-9 text-navy-700 dark:text-white">
            Analyze Music
          </h5>
          <p className="leading-1 mt-2 text-base font-normal text-gray-600">
            Upload your music and we will analyze it for you.
          </p>
          <button
            className="linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            onClick={handlePublish}
          >
            Publish now
          </button>
        </div>
      </Card>
    </>
  );
};

export default Upload;
// {analysisResult && (
//   <div className="analysis-result">
//     {/* Render your analysis result here */}
//     <h5>Analysis Result</h5>
//     <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
//   </div>
// )}
