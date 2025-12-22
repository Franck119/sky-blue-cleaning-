import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const container = document.getElementById('root');

if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Mounting error:", error);
    container.innerHTML = `<div style="color: white; padding: 20px; font-family: sans-serif;">
      <h2>SkyBlue Loading Failure</h2>
      <p>The application encountered an error during startup. Please refresh the page.</p>
    </div>`;
  }
} else {
  console.error("Critical: #root element not found in HTML.");
}