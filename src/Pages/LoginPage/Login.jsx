import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';
import Loading from '../../Components/Loading/Loading';
import loginImg from '../../assets/login.svg'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { loginAUser, googleLogin, loading, setLoading } = useContext(AuthContext);
    const from = location?.state?.from?.pathname || '/';
    const notify = location?.state?.alert;
    useEffect(() => {
        if (notify) {

            toast.error(`${notify}`)
        }
    }, [])

    if (loading) {
        return <Loading />
    }

    // email pass login 
    const handleLoginAUser = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginAUser(email, password)
            .then(res => {
                const user = res.user;
                toast.success(`Login Successfully with ${user.displayName}`)
                setLoading(false)
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(`${error.message}`)
                setLoading(false)
            })


        e.target.reset()
    }

    // google login 
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                toast.success(`Successfull login with ${user.displayName}`)
                setLoading(false)
                navigate(from, { replace: true })
            })
            .catch(error => {
                if (error.message == 'Firebase: Error (auth/popup-closed-by-user).') {
                    toast.error("Login cancelled by user")
                    setLoading(false)
                }
            })
    }


    return (
        <HelmetProvider>
            <Helmet>
                <title>Animals Toyhub | Login</title>
            </Helmet>
            <div>
                <h1 className='text-3xl font-semibold text-center'>Welcome Back</h1>
                <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
                    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-[1000px]" >
                        <div className="md:flex w-full">
                            <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                                <img src={loginImg} alt="" />
                            </div>
                            <div className=" lg:w-1/2 mx-auto">
                                <div className="bg-gray-100 rounded-t-lg p-8">
                                    <p className="text-center text-sm text-gray-400 font-light">Log in with</p>
                                    <div>
                                        <div className="flex items-center justify-center space-x-4 mt-3">
                                            <button
                                                onClick={handleGoogleLogin}
                                                className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6 mr-3"
                                                    viewBox="0 0 48 48"
                                                >
                                                    <path
                                                        fill="#fbc02d"
                                                        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                                                    />
                                                    <path
                                                        fill="#e53935"
                                                        d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                                                    />
                                                    <path
                                                        fill="#4caf50"
                                                        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                                                    />
                                                    <path
                                                        fill="#1565c0"
                                                        d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                                                    />
                                                </svg>
                                                Google
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
                                    <p className="text-center text-sm text-gray-500 font-light">
                                        Or log in with credentials
                                    </p>
                                    <form onSubmit={handleLoginAUser} className="mt-6">
                                        <div className="relative">
                                            <input
                                                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                                                id="usernameemail"
                                                type="email"
                                                name='email'
                                                placeholder="Email"
                                                required
                                            />
                                            <div className="absolute left-0 inset-y-0 flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                                                    />
                                                    <path
                                                        d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        {/* password  */}
                                        <div className="relative mt-3">
                                            <input
                                                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                                                id="usernamepass"
                                                type="password"
                                                name='password'
                                                placeholder="*********"
                                                required
                                            />
                                            <div className="absolute left-0 inset-y-0 flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center mt-8">
                                            <div className="w-full px-3 mb-5">
                                                <button
                                                    type="submit"
                                                    data-mdb-ripple="true"
                                                    data-mdb-ripple-color="light"
                                                    className="block w-full max-w-xs mx-auto btn btn-primary normal-case">Login</button>
                                            </div>
                                        </div>
                                        <p className="ms-4 text-sm font-semibold mt-2 pt-1 mb-0">
                                            Don't have an account?
                                            <Link
                                                to="/register"
                                                className="text-primary transition duration-200 ease-in-out underline"
                                            >Register</Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Login;