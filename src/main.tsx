 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SmoothScrollProvider } from './SmoothScrollProvider.tsx'

createRoot(document.getElementById('root')!).render(
 <SmoothScrollProvider>
  <App />
</SmoothScrollProvider>
)
