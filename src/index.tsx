import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Buffer } from 'buffer';
window.Buffer = Buffer
import { ThemeProvider } from './components/theme-provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <App />
  </ThemeProvider>
);
