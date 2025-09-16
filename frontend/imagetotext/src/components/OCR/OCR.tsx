import { useState } from "react";
import { UploadFiles, SendFiles, ProcessResponse, Input, Textarea, Button, DownloadPDF, InputButton, LabelButton, Header } from "../index"
import "./OCR.css"

function OCR() {
  const [text, setText] = useState("");
  const [showTextarea, setShowTextarea] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = UploadFiles({ type: "imagen", e });
    const res = await SendFiles(formData);
    await ProcessResponse({ res, setText });

    setShowTextarea(true);
  };

  const handleDownload = () => {
    DownloadPDF(text);
  }

  return (
    <>
      <Header />
      <div className="upload-container">
        <InputButton>
          <LabelButton htmlFor={"upload-img"}>Seleccionar archivo</LabelButton>
          <Input id="upload-img" type="file" onChange={handleFileChange} />
        </InputButton>
        {showTextarea && (
          <>
            <Textarea id="textarea" value={text} onChange={e => setText(e.target.value)} />
            <Button parentMethod={handleDownload} label="Descargar PDF" />
          </>
        )}
      </div>
    </>
  );
}

export default OCR;