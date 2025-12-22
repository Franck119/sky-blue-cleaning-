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
      <div style="padding: 2rem; text-align: center; font-family: sans-serif; color: #333; background: #fff; height: 100vh; display: flex; flex-direction: column; justify-content: center;">
        <h1 style="font-weight: 900; letter-spacing: -0.05em;">SkyBlue Environment Error</h1>
        <p>We encountered an issue loading the experience. Please try refreshing.</p>
        <div style="max-width: 600px; margin: 2rem auto; text-align: left; background: #f8fafc; padding: 2rem; border-radius: 24px; font-size: 11px; border: 1px solid #e2e8f0; overflow: auto;">
          <code>${error instanceof Error ? error.stack || error.message : String(error)}</code>
        </div>
        <button onclick="window.location.reload()" style="background: #0ea5e9; color: white; padding: 12px 24px; border: none; border-radius: 12px; font-weight: 800; cursor: pointer; margin-top: 1rem;">REFRESH SYSTEM</button>
      </div>
    `;
  }
}