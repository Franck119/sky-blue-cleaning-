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
    
    // Explicitly remove the loader if React doesn't clear it automatically
    const loader = document.getElementById('app-loader');
    if (loader) {
      setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
      }, 500);
    }
  } catch (err) {
    console.error('SkyBlue Boot Error:', err);
    container.innerHTML = `
      <div style="padding: 40px; text-align: center; background: #020617; color: white; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: sans-serif;">
        <h1 style="color: #0ea5e9;">System Initialization Failed</h1>
        <p style="opacity: 0.7;">An error occurred while loading the high-precision interface.</p>
        <pre style="background: #111; padding: 20px; border-radius: 12px; color: #ff4b4b; text-align: left; max-width: 90vw; overflow: auto; margin-top: 20px; font-size: 13px;">${err instanceof Error ? err.message : String(err)}</pre>
        <button onclick="location.reload()" style="margin-top: 30px; background: #0ea5e9; color: white; border: none; padding: 12px 24px; border-radius: 30px; font-weight: 900; cursor: pointer;">RETRY BOOT</button>
      </div>
    `;
  }
}