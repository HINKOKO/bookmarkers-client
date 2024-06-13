import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCloseSharp, IoEye, IoEyeOff } from 'react-icons/io5';
import './register.css';

const url = `http://localhost:8080`;

const Register = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // to toggle visible/invisble typed password - help user confirm his typing
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Passwords visibility toggler
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async e => {
    e.preventDefault();

    if (!username || !email || !password || !passwordConfirm) {
      alert('All fields  required !');
    }
    if (password !== passwordConfirm) {
      setPasswordError('error: password mismatches');
      alert('Passwords do not match');
      return;
    }

    const passwordRegex = /^(?=.*[0-9].*[0-9])(?=.*[!@#()\[\]]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        'Please at least 8 characters long, 2 digits, and one of the following specials : &#@!()[]'
      );
      alert('One or more fields are wrong');
      return;
    }

    let payload = {
      username: username,
      email: email,
      password: password,
    };
    try {
      const response = await fetch(`${url}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        window.location.href = '/email-confirmation';
      } else {
        console.error('registration failed');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative flex h-screen justify-center">
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-purple-900 bg-opacity-50 z-0"></div>
      <div className="flex container md:my-4 md:rounded-xl flex-col items-center p-6 border-2 w-full md:w-1/2 md:bg-slate-200 relative z-10">
        <h2 className="text-2xl text-center font-bold font-kanit">Register</h2>
        <button
          className="absolute top-8 right-8 inline-flex items-center space-x-2 bg-red-800 text-white font-medium px-4 py-2 rounded-lg"
          onClick={() => navigate('/')}
        >
          <span>Abort</span>
          <IoCloseSharp />
        </button>

        <form className="mx-auto w-3/5 mt-10">
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium font-kanit"
            >
              A cool username
            </label>
            <input
              type="text"
              id="username"
              placeholder="username"
              className="border text-sm rounded-lg block w-full p-2.5"
              onChange={e => setUsername(e.target.value)}
              maxLength={24}
              required
            />
            {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500">
              <span className="font-medium">Alright!</span> Username available!
            </p> */}
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium font-kanit"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border text-sm rounded-lg block w-full p-2.5"
              placeholder="email"
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              onChange={e => setEmail(e.target.value)}
              maxLength={120}
              title="Please enter a valid email address (e.g., example@domain.com)"
              required
            />
          </div>
          <div className="mb-5 relative">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium font-kanit"
            >
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="border-2 text-sm rounded-lg block w-full p-2.5 pr-10"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              maxLength={60}
              required
            />
            <span
              className="absolute right-3 top-0 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <IoEyeOff className="text-xl" />
              ) : (
                <IoEye className="text-xl" />
              )}
            </span>
          </div>
          <div className="mb-5">
            <label
              htmlFor="password-confirm"
              className="block mb-2 text-sm font-medium font-kanit"
            >
              Confirm Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password-confirm"
              className="border-2 text-sm rounded-lg block w-full p-2.5"
              placeholder="Confirm Password"
              onChange={e => setPasswordConfirm(e.target.value)}
              maxLength={60}
              required
            />

            {passwordError && <p className="text-red-500">{passwordError}</p>}
          </div>

          <button
            className="mt-6 px-4 py-4 border w-full rounded-xl bg-amber-700 text-lg font-medium font-kanit"
            onClick={handleRegister}
          >
            Let's go!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
