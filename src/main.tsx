import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add Font Awesome
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
document.head.appendChild(link);

// Add Google Fonts
const fontLink1 = document.createElement('link');
fontLink1.rel = 'stylesheet';
fontLink1.href = 'https://fonts.googleapis.com/css?family=Montserrat:400,700';
document.head.appendChild(fontLink1);

const fontLink2 = document.createElement('link');
fontLink2.rel = 'stylesheet';
fontLink2.href = 'https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic';
document.head.appendChild(fontLink2);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
