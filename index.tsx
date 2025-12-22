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
  } catch (err) {
    console.error('Failed to render SkyBlue App:', err);
    container.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; background:#020617; color:white; font-family:sans-serif; text-align:center; padding:20px;">
        <h1 style="color:#0ea5e9; font-size:24px; margin-bottom:10px;">Application Load Error</h1>
        <p style="opacity:0.7;">The high-precision environment failed to initialize.</p>
        <pre style="background:#111; padding:15px; border-radius:10px; color:#ff4b4b; margin-top:20px; font-size:12px; max-width:100%; overflow:auto;">${err instanceof Error ? err.message : String(err)}</pre>
        <button onclick="location.reload()" style="margin-top:20px; background:#0ea5e9; color:white; border:none; padding:10px 20px; border-radius:20px; cursor:pointer; font-weight:bold;">RETRY BOOT</button>
      </div>
    `;
  }
}