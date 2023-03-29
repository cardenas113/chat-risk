import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <AuthContextProvider>
  <ChatContextProvider>
   <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChatContextProvider>
  </AuthContextProvider>
  
);




