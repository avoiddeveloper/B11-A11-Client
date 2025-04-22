import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import SignInLottie from "../../assets/lottie/login.json"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const SignIn = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    const handleSignIn = e => {

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                Swal.fire({
                    title: "Congratulation",
                    text: `${user.displayName} Sir SignUp Successful`,
                    icon: "success"
                });
                navigate(from);
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: `${errorMessage}`,
                });
            });

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((userCredential) => {
                const user = userCredential.user;
                Swal.fire({
                    title: "Congratulation",
                    text: `${user.displayName} Sir SignUp Successful`,
                    icon: "success"
                });
                navigate(from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: `${errorMessage}`,
                });
            });
    }
    return (
        <div className="hero min-h-94">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="md:w-lg lg:w-xl">
                    <Lottie animationData={SignInLottie} loop={true} />
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Sign in now!</h1>

                        <form onSubmit={handleSignIn} className="fieldset">
                            {/* Email */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Enter your email" required />

                            {/* Password */}
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Enter your password" required />

                            <button className="btn btn-neutral mt-4">Sign in</button>
                            <button onClick={handleGoogleSignIn} className="btn btn-neutral mt-4">Google</button>
                        </form>

                        <div className='text-center'>
                            <Link to={"/sing-up"} className='link'>SignUp</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;