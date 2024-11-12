import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const handleForm=(e)=>{
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)

        setErrorMessage('')
        setSuccess(false)
        // dont send error to server side handle it here where we know it will get error anyway
        if(password.length<6){
            setErrorMessage('Password should be at least 6 characters')
            return
        }
        // regex regular expression here 
        // const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!/(?=.*[A-Z])/.test(password)) {
            setErrorMessage("Password must contain at least one uppercase letter.");
            return false;
          }
          if (!/(?=.*[a-z])/.test(password)) {
            setErrorMessage("Password must contain at least one lowercase letter.");
            return false;
          }
          if (!/(?=.*\d)/.test(password)) {
            setErrorMessage("Password must contain at least one digit.");
            return false;
          }
          if (!/(?=.*[@$!%*?&])/.test(password)) {
            setErrorMessage("Password must contain at least one special character (@$!%*?&).");
            return false;
          }
          if (password.length < 8) {
            setErrorMessage("Password must be at least 8 characters long.");
            return false;
          }



        // create user with password authentication
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user)
            setSuccess(true)
        })
        .catch(error=>{
            console.log('ERROR',error)
            setErrorMessage(error.message)
            setSuccess(false)
        })

    }
    return (
        <div className="max-w-xl mx-auto space-y-10">
            <div className="text-2xl">Register</div>
            
            <form onSubmit={handleForm} className="space-y-6">
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="email" name="email" className="grow" placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="password" name="password" className="grow" placeholder="Password" />
                </label>
                <button className="btn btn-accent btn-wide">Register</button>
                {
                    errorMessage && <p className="text-red-600">{errorMessage}</p>
                }
                {
                    success && <p className="text-green-500">Sign Up Successful</p>
                }
            </form>
        </div>
    );
};

export default Register;