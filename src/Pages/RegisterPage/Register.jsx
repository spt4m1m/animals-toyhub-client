import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';
import Loading from '../../Components/Loading/Loading';
import registerImg from '../../assets/register.svg'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Register = () => {
    const navigate = useNavigate()
    const { registerAUser, updateAUserProfile, googleLogin, loading, setLoading } = useContext(AuthContext);

    if (loading) {
        return <Loading />
    }

    // email pass register 
    const handleRegisterAUser = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;


        registerAUser(email, password)
            .then(res => {
                const user = res.user;
                updateAUserProfile(user, name, photoUrl)
                    .then(() => { toast.success(`Register Successfully with ${user.displayName}`) })
                    .catch(error => toast.error(`${error.message}`))
                setLoading(false)
                navigate('/')
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
                navigate('/')
            })
            .catch(error => {
                if (error.message == 'Firebase: Error (auth/popup-closed-by-user).') {
                    toast.error("Login cancelled by user")
                    setLoading(false)
                }
            })
    }

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <HelmetProvider>
            <Helmet>
                <title>Animals Toyhub | Register</title>
            </Helmet>
            <div>
                <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
                    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-[1000px]" >
                        <div className="md:flex w-full">
                            <div data-aos="fade-right" className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                                <img src={registerImg} alt="" />
                            </div>
                            <div data-aos="fade-left" className="w-full md:w-1/2 py-10 px-5 md:px-10">
                                <div className="text-center mb-10">
                                    <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                                    <p>Enter your information to register</p>
                                </div>
                                <form onSubmit={handleRegisterAUser}>
                                    <div>
                                        <div className="flex -mx-3">
                                            {/* name  */}
                                            <div className="w-1/2 px-3 mb-5">
                                                <label className="text-xs font-semibold px-1">Name</label>
                                                <div className="flex">
                                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                                    <input name='name' type="text" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="name" required />
                                                </div>
                                            </div>
                                            {/* photo url  */}
                                            <div className="w-1/2 px-3 mb-5">
                                                <label className="text-xs font-semibold px-1">Photo URL</label>
                                                <div className="flex">
                                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                                    <input name='photoUrl' type="text" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="photo url" required />
                                                </div>
                                            </div>
                                        </div>
                                        {/* email  */}
                                        <div className="flex -mx-3">
                                            <div className="w-full px-3 mb-5">
                                                <label className="text-xs font-semibold px-1">Email</label>
                                                <div className="flex">
                                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                                    <input name='email' type="email" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="example@gmail.com" required />
                                                </div>
                                            </div>
                                        </div>
                                        {/* pass  */}
                                        <div className="flex -mx-3">
                                            <div className="w-full px-3 mb-12">
                                                <label className="text-xs font-semibold px-1">Password</label>
                                                <div className="flex">
                                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                                    <input name='password' type="password" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" required />
                                                </div>
                                            </div>
                                        </div>
                                        {/* or  */}
                                        <div
                                            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                        >
                                            <p className="text-center font-semibold mx-4 mb-0 text-black">Or</p>
                                        </div>

                                        <div className="flex flex-row items-center justify-center lg:justify-start">
                                            <p className="text-xl mb-5 mr-4 text-black font-semibold">REGISTER WITH -:</p>
                                            <span
                                                onClick={handleGoogleLogin}
                                                className='text-4xl mb-5 cursor-pointer'
                                            ><Icon icon="flat-color-icons:google" />
                                            </span>
                                        </div>
                                        <div className="flex -mx-3">
                                            <div className="w-full px-3 mb-5">
                                                <button
                                                    type="submit"
                                                    data-mdb-ripple="true"
                                                    data-mdb-ripple-color="light"
                                                    className="block w-full max-w-xs mx-auto btn btn-primary normal-case">REGISTER NOW</button>
                                            </div>
                                        </div>
                                        <p className="ms-4 text-sm font-semibold mt-2 pt-1 mb-0">
                                            Don't have an account?
                                            <Link
                                                to="/login"
                                                className="text-primary transition duration-200 ease-in-out underline"
                                            >Login</Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Register;