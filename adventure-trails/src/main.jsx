import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShowHome from '../Pages/home.jsx'

ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <ShowHome />
  </React.StrictMode>,
)
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
