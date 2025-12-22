import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical: Root element not found.");
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("React Render Error:", error);
    rootElement.innerHTML = `
      <div style="padding: 40px; color: white; text-align: center; font-family: sans-serif;">
        <h1 style="color: #0ea5e9;">System Initialization Failed</h1>
        <p>Please check your browser console for error details.</p>
        <pre style="text-align: left; background: #111; padding: 20px; border-radius: 8px; font-size: 12px; color: #ff4444; overflow: auto;">${error instanceof Error ? error.message : String(error)}</pre>
        <button onclick="window.location.reload()" style="background: #0ea5e9; color: white; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer;">Retry Boot</button>
      </div>
    `;
  }
}