import 'jquery';
import 'slick-carousel';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  );
}
