import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router, RouterProvider } from 'react-router-dom'
import Landingpage from './pages/Landingpage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landingpage />
  }
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
);
