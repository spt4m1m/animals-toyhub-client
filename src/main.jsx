import React from 'react'
import ReactDOM from 'react-dom/client'
import MainLayOut from './MainLayOut.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/HomePage/Home.jsx';
import AllToys from './Pages/AllToysPage/AllToys.jsx';
import MyToys from './Pages/MyToysPage/MyToys.jsx';
import AddToy from './Pages/AddToyPage/AddToy.jsx';
import Login from './Pages/LoginPage/Login.jsx';
import Register from './Pages/RegisterPage/Register.jsx';
import Blogs from './Pages/Blogs/Blogs.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/alltoys',
        element: <AllToys />
      },
      {
        path: '/mytoys',
        element: <MyToys />
      },
      {
        path: '/addtoy',
        element: <AddToy />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
