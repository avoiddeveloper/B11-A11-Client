import Lottie from "lottie-react";
import SignUpLottie from "../../assets/lottie/register.json"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
    const { createUSer, setUser } = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;

        // Simple regex for: at least one lowercase, one uppercase, and minimum 6 characters
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must be at least 6 characters long and include both uppercase and lowercase letters.",
            });
            return;
        }

        createUSer(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                updateProfile(user, {
                    displayName: name,
                    photoURL: photoUrl,
                }).then(() => {
                    setUser(user);
                    Swal.fire({
                        title: "Congratulation",
                        text: "SignUp Successfully",
                        icon: "success"
                    });
                }).catch((error) => {
                    alert("Error updating user profile:", error);
                });

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
    return (
        <div className="hero min-h-94">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="md:w-lg lg:w-xl">
                    <Lottie animationData={SignUpLottie} loop={false} />
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>

                        <form onSubmit={handleSignUp} className="fieldset">
                            {/* Name */}
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Enter your name" required />

                            {/* Email */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Enter your email" required />

                            {/* Photo URL */}
                            <label className="label">PhotoURL</label>
                            <input type="url" name='photoUrl' className="input" placeholder="Enter your Photo URL" required />

                            {/* Password */}
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Enter password" required />

                            <button className="btn btn-neutral mt-4">SignUp</button>
                        </form>

                        <div className='text-center'>
                            <Link to={"/sing-in"} className='link'>Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;