import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster
      theme='dark'
      toastOptions={{
        classNames: {
          toast: '!rounded-xs font-mono !bg-black/80 backdrop-blur-sm'
        }
      }}
    />
    <App />
  </StrictMode>
)

