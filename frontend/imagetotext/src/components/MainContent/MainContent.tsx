import { useState } from "react";
import { useToast } from "../../hooks";
import { UploadFiles, SendFiles, ProcessResponse, Input, Textarea, Button, DownloadPDF, 
  InputButton, LabelButton, CopyToClipboard
} from "../index"
import css from "./MainContent.module.css"

export const MainContent = () => {
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

  const handleCopy = () => {
    CopyToClipboard(text);
  }

  const { showToast } = useToast();

  return (
    <>
      <div className={css.upload_container}>
        <InputButton>
          <LabelButton htmlFor={"upload-img"}>Seleccionar archivo</LabelButton>
          {/* Este input hace que si estoy en la PC, pueda seleccionar un archivo tipo imagen, si estoy en el 
            celular, puedo usar la cámara */}
          <Input id="upload-img" hidden={true} type="file" accept="image/*" capture="environment" onChange={handleFileChange} />
          { /* <Input id="upload-img" type="file" accept="image/*" onChange={handleFileChange} /> */}
        </InputButton>
        {showTextarea && (
          <>
            <Textarea id="textarea" value={text} onChange={e => setText(e.target.value)} />
            <div className={css.buttons}>
              <Button onClick={handleDownload} label="Descargar PDF" />
              <Button onClick={(e) => {
                handleCopy();
                // @ts-ignore 
                showToast("Texto copiado", e.clientX, e.clientY);
                }} 
                label="Copiar" 
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}