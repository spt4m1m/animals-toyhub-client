import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';
import Loading from '../../Components/Loading/Loading';

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
                            src="register.svg"
                            className="w-full"
                            alt=""
                        />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <h1 className='text-2xl text-center font-semibold py-10 underline-offset-2'>Please Register !</h1>
                        <form onSubmit={handleRegisterAUser}>
                            {/* <!-- Name input --> */}
                            <div className="mb-6">
                                <input
                                    type="text"
                                    name='name'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                    placeholder="Your Name" required
                                />
                            </div>
                            {/* <!-- Photo Link input --> */}
                            <div className="mb-6">
                                <input
                                    type="text"
                                    name='photoUrl'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                    placeholder="Photo Url"
                                />
                            </div>

                            {/* <!-- Email input --> */}
                            <div className="mb-6">
                                <input
                                    type="email"
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

                            {/* pass end */}
                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0 text-black">Or</p>
                            </div>

                            {/* or  */}
                            <div className="flex flex-row items-center justify-center lg:justify-start">
                                <p className="text-xl mb-0 mr-4 text-black">Register with -:</p>
                                <button
                                    onClick={handleGoogleLogin}
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className='text-4xl'
                                ><Icon icon="flat-color-icons:google" />
                                </button>
                            </div>


                            {/* register button */}

                            <div className="text-center lg:text-left">
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-primary text-white font-medium text-xl leading-snug rounded shadow-md hover:bg-white hover:text-primary hover:shadow-lg focus:bg-white focus:text-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out border-2 border-primary w-full my-5"
                                >
                                    Register
                                </button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0 text-black">
                                    Already Have an account?
                                    <Link
                                        to="/login"
                                        className="text-primary underline transition duration-200 ease-in-out"
                                    > Login </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;