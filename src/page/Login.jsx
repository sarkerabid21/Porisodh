import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const Login = () => {

    const provider = new GoogleAuthProvider();



    const [error, setError] = useState("");

    const { signIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // Password validation
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasMinLength = password.length >= 6;

        if (!hasUppercase || !hasLowercase || !hasMinLength) {
            let errorMsg = "Password must contain:";
            if (!hasUppercase) errorMsg += " at least one uppercase letter,";
            if (!hasLowercase) errorMsg += " at least one lowercase letter,";
            if (!hasMinLength) errorMsg += " and be at least 6 characters long.";
            setError(errorMsg);
            return;
        } else {
            setError("");
        }

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                navigate(location.state ? location.state : "/");
            })
            .catch((error) => {
                setError("Invalid credentials. Please try again.");
            });
    };

    const handleGoogleSignIn = () =>{
        // console.log('google sign in cliked');

        signInWithPopup(auth , provider)
        .then(result => {
            // console.log(result)
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='bg-gradient-to-b from-gray-100 to-green-200 flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-bold text-3xl text-center underline'>Login Your Account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        <div><a className="link link-hover">Forgot password?</a></div>

                        {error && <p className='text-red-500 text-xs mt-1'>{error}</p>}

                        <div className='space-y-4'>
                        <button  type='submit' className="btn btn-neutral mt-4 w-full">Login</button>

<button onClick={handleGoogleSignIn} className='btn btn-secondary w-full'><FcGoogle size={24}/>Login with Google</button>

                        </div>


                        <p className='mt-3 text-center font-semibold'>
                            Don't Have An Account? <Link className='text-secondary font-semibold' to="/auth/register">Register</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;
