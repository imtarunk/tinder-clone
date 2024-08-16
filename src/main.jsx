import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChatScreen from './Components/chatScreen/ChatScreen.jsx';
// import './index.css'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/chat", element: <ChatScreen /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
