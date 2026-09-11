import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.jsx';
import './styles/global.css';

// The static hero shell in index.html paints instantly; remove it in the same
// tick the app mounts so the swap is seamless.
document.getElementById('static-shell')?.remove();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
