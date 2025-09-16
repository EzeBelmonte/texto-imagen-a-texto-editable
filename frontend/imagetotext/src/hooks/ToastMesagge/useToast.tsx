import { createContext, useContext, useState, type ReactNode } from "react";
import "./useToast.css"

interface ToastContextType {
  showToast: (msg: string, x: number, y: number) => void;
}

interface ToastState {
  message: string,
  x: number,
  y: number,
  visible: boolean
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastState | null>(null);

  const showToast = (msg: string, x: number, y: number) => {
    setToast({ message: msg, x, y, visible: true});
      setTimeout(() => {
        setToast((prev) => prev ? { ...prev, visible: false } : null);
      }, 2000); // duración del toast

      setTimeout(() => setToast(null), 2200); // limpiar después de animación
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div className={`custom-toast ${toast.visible ? "show" : ""}`} 
          style={{ top: toast.y + "px", left: toast.x + "px" }}
        >
          {toast.message}
        </div>
      )}
    </ToastContext.Provider>
  )
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast debe usarse dentro de ToastProvider")
  return ctx;
};