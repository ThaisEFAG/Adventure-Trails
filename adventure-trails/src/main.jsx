import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./Pages/Home/Home"
import Cadastro from "./Pages/Cadastro/Cadastro";
import Lista from "./Pages/Lista/Lista";
import Home from './Pages/Home/Home';

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/cadastro",
        element: <Cadastro/>
    },
    {
        path: "/lista",
        element: <Lista/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider  router = {routers}>
    </RouterProvider>
//     <>
//   <Routes>
//             <Route path="/" element={<Home/> } />
//             <Route path="/cadastro" element={<Cadastro />} />
//         </Routes>
//     </BrowserRouter>

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
)
