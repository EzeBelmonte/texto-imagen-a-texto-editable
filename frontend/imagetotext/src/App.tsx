import './App.css'
import { Header, MainContent } from './components';
import { ToastProvider } from './hooks/ToastMesagge/useToast';

function App() {

  return (
    <>
      <Header />
      <ToastProvider>
        <MainContent />
      </ToastProvider>
    </>
  )
}

export default App
