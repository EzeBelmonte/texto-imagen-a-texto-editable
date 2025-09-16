import React from "react";

interface UploadFilesProps  {
    type: string,
    e: React.ChangeEvent<HTMLInputElement> // e debe ser evento de input file
  }

function UploadFiles({ type, e }: UploadFilesProps): FormData | null { // : FormData | null Indica que la función va a devolver FormData o null

  const file = e.target.files?.[0];
  if (!file) return null;

  const formData = new FormData();
  formData.append(type, file);
  return formData;
}

export default UploadFiles;