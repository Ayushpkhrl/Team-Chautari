import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // ✅ Correct import
import Landingpage from './pages/Landingpage.jsx';
import Login from './login/Login.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Landingpage />,
    children:[
      { path:'login',
        element:<Login/>
      }
    ]
  }
  

]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
);
