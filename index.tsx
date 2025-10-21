import React from 'react'
import { createRoot } from 'react-dom/client'
import "./tailwind.css" // Asegúrate de que esto esté configurado
import App from "./App"

createRoot(document.getElementById('root')!).render(<App />)
