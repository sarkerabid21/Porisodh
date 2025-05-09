import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {createUser ,setUser } =use(AuthContext)
    const handleRegister = (e) =>{
        e.preventDefault();
        console.log(e.target);

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name,email,password});
        createUser(email,password)
        .then(result =>{
            const user=result.user;
            // console.log(user);
            setUser(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
          });
        

    }


    return (
        <div className='bg-gradient-to-b from-gray-100 to-green-200 flex justify-center items-center min-h-screen'>
 <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl py-5">
    <h2 className='font-bold text-3xl text-center underline'>Register Your Account</h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
        <label className="label">Name</label>
        <input name='name' type="text" className="input" placeholder="Name"
        required />
        



          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
           <p className='mt-3 text-center font-semibold'>Already Have An Account? <Link className='text-secondary font-semibold ' to="/auth/login">Login </Link></p>
         
        </fieldset>
      </form>
    </div>
            </div>
    );
};

export default Register;