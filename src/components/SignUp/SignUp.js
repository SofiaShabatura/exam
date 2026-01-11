import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="signup">
      <div className="signup-left">
        <div className="signup-title">
          <h1>Sign up</h1>
          <p>Create a free account with your email.</p>
        </div>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />

        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(p => !p)}
          >
            👁
          </button>
        </div>

        <button className="primary-btn">
          Create your free account
        </button>
        <p className="signup-footer">
          Already have an account?
          <Link to="/login"> Sign in</Link>
        </p>
      </div>

      <div className="signup-right"></div>
    </div>
  );
};

export default SignUp;
