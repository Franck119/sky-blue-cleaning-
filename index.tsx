import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Global error handling to catch issues before React even mounts
window.onerror = (message, source, lineno, colno, error) => {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `
      <div style="padding: 40px; background: #020617; color: white; min-height: 100vh; font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
        <h1 style="color: #0ea5e9; font-size: 2rem; margin-bottom: 20px;">System Error Detected</h1>
        <p style="opacity: 0.7; margin-bottom: 30px;">A critical module failed to load. Please try refreshing.</p>
        <div style="background: #111; padding: 20px; border-radius: 12px; border: 1px solid #333; color: #ff4b4b; text-align: left; font-family: monospace; font-size: 14px; max-width: 90vw; overflow: auto;">
          ${message}<br/>at ${source}:${lineno}:${colno}
        </div>
        <button onclick="window.location.reload()" style="margin-top: 30px; background: #0ea5e9; color: white; border: none; padding: 12px 30px; border-radius: 30px; font-weight: 800; cursor: pointer;">RELOAD APPLICATION</button>
      </div>
    `;
  }
};

const container = document.getElementById('root');

if (!container) {
  console.error("Critical: #root element not found in DOM.");
} else {
  try {
    // Clear the loader if it exists
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (renderError) {
    console.error("React Mounting Error:", renderError);
    container.innerHTML = `
      <div style="padding: 40px; background: #020617; color: white; min-height: 100vh; font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
        <h2 style="color: #0ea5e9;">Mounting Failure</h2>
        <p>The UI engine failed to initialize.</p>
        <pre style="background: #111; padding: 15px; border-radius: 8px; color: #ff4b4b;">${renderError instanceof Error ? renderError.message : String(renderError)}</pre>
      </div>
    `;
  }
}