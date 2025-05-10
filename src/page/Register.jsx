import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const { createUser, setUser, updateUser } = use(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // Name validation
        if (name.length < 5) {
            setNameError("Name should be more than 5 characters.");
            return;
        } else {
            setNameError("");
        }

        // Password validation
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasMinLength = password.length >= 6;

        if (!hasUppercase || !hasLowercase || !hasMinLength) {
            let errorMsg = "Password must contain:";
            if (!hasUppercase) errorMsg += " at least one uppercase letter,";
            if (!hasLowercase) errorMsg += " at least one lowercase letter,";
            if (!hasMinLength) errorMsg += " and be at least 6 characters long.";
            setPasswordError(errorMsg);
            return;
        } else {
            setPasswordError("");
        }

        // Create User
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate("/");
                    })
                    .catch(error => {
                        console.log(error);
                        setUser(user);
                    });
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className='bg-gradient-to-b from-gray-100 to-green-200 flex justify-center items-center min-h-screen'>
            <div className="card bg-white w-full max-w-sm shadow-2xl py-5">
                <h2 className='font-bold text-3xl text-center underline'>Register Your Account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" required />
                        {nameError && <p className='text-red-500 text-xs'>{nameError}</p>}

                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        <label className="label">Photo URL</label>
                        <input name='photo' type="text" className="input" placeholder="Photo URL" required />

                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        {passwordError && <p className='text-red-500 text-xs'>{passwordError}</p>}

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='mt-3 text-center font-semibold'>
                            Already Have An Account? <Link className='text-secondary font-semibold' to="/auth/login">Login</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;
