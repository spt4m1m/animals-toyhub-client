import React from 'react'
import ReactDOM from 'react-dom/client'
import MainLayOut from './MainLayOut.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './index.css'
import Home from './Pages/HomePage/Home.jsx';
import AllToys from './Pages/AllToysPage/AllToys.jsx';
import MyToys from './Pages/MyToysPage/MyToys.jsx';
import AddToy from './Pages/AddToyPage/AddToy.jsx';
import Login from './Pages/LoginPage/Login.jsx';
import Register from './Pages/RegisterPage/Register.jsx';
import Blogs from './Pages/Blogs/Blogs.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import SingleToy from './Components/SingleToy/SingleToy.jsx';
import UpdateToy from './Components/SingleToy/UpdateToy.jsx';

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
        element: <PrivateRoute><AllToys /></PrivateRoute>
      },
      {
        path: '/alltoys/:id',
        element: <PrivateRoute><SingleToy /></PrivateRoute>
      },
      {
        path: '/mytoys',
        element: <PrivateRoute><MyToys /></PrivateRoute>
      },
      {
        path: '/mytoy/updatetoy/:id',
        element: <PrivateRoute><UpdateToy /></PrivateRoute>
      },
      {
        path: '/addtoy',
        element: <PrivateRoute><AddToy /></PrivateRoute>
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
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
