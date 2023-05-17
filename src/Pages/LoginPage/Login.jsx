import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';
import Loading from '../../Components/Loading/Loading';

const Login = () => {

    const { loginAUser, googleLogin, loading, setLoading } = useContext(AuthContext);

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
            })
            .catch(error => {
                if (error.message == 'Firebase: Error (auth/popup-closed-by-user).') {
                    toast.error("Login cancelled by user")
                    setLoading(false)
                }
            })
    }


    return (
        <section className="h-screen">
            <div className="px-6 h-full">
                <div
                    className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                >
                    <div
                        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                    >
                        <img
                            src="login.svg"
                            className="w-full"
                            alt=""
                        />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <h1 className='text-2xl py-10 underline-offset-2 text-center font-semibold'>Please Login !</h1>
                        <form onSubmit={handleLoginAUser}>

                            {/* <!-- Email input --> */}
                            <div className="mb-6">
                                <input
                                    type="text"
                                    name='email'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                    placeholder="Email address" required
                                />
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="mb-6">
                                <input
                                    type="password"
                                    name='password'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                    placeholder="Password" required

                                />
                            </div>


                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0">Or</p>
                            </div>
                            <div className="flex flex-row items-center justify-center lg:justify-start">
                                <p className="text-xl mb-0 mr-4">Login in with -: </p>
                                <button
                                    onClick={handleGoogleLogin}
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className='text-4xl'
                                ><Icon icon="flat-color-icons:google" />
                                </button>
                            </div>

                            <div className="text-center lg:text-left my-5">
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-primary text-white font-medium text-xl leading-snug rounded shadow-md hover:bg-white hover:text-primary hover:shadow-lg focus:bg-white focus:text-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out border-2 border-primary w-full"
                                >
                                    Login
                                </button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Don't have an account?
                                    <Link
                                        to="/register"
                                        className="text-primary transition duration-200 ease-in-out underline"
                                    >Register</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;