import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical: Could not find root element with id 'root'");
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Failed to render React application:", error);
    rootElement.innerHTML = `
      <div style="padding: 2rem; text-align: center; font-family: sans-serif; color: #333;">
        <h1>Application Error</h1>
        <p>We encountered an issue loading the experience. Please try refreshing.</p>
        <pre style="text-align: left; background: #f4f4f4; padding: 1rem; border-radius: 8px; font-size: 12px; margin-top: 1rem; overflow: auto;">
          ${error instanceof Error ? error.stack || error.message : String(error)}
        </pre>
      </div>
    `;
  }
}