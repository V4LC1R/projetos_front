import React, { useRef, useState } from 'react';

export default function FileDropzone() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className={`flex flex-col items-center justify-center px-6 py-10 border-2 ${
          isDragging ? 'border-blue-400 bg-blue-50' : 'border-dashed border-gray-400'
        } rounded-lg transition duration-200 cursor-pointer text-center`}
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <p className="text-gray-600">
          Arraste um arquivo aqui ou <span className="text-blue-600 underline">clique para selecionar</span>
        </p>

        {fileName && (
          <p className="mt-4 text-sm text-green-600">Arquivo selecionado: {fileName}</p>
        )}

        <input
          type="file"
          ref={inputRef}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
