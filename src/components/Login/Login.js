import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="login-left">

        <div className="login-title">
          <h1>Hello!</h1>
          <p>Use your email or another service to continue</p>
        </div>

        <button className="login-btn social">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMhgB-GccVnB-ZJFuZg7HUsmdifnuxStqmA&s" alt="Google" /> 
           Continue with Google 
           </button>
            <button className="login-btn social"> 
              <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="Apple" /> 
              Continue with Apple 
            </button>
        <div className="login-or">
          <span>OR</span>
        </div>

        <button
          className="login-btn primary"
          onClick={() => navigate('/registration')}
        >
          Continue with email
        </button>

        <p className="login-footer">
          Don’t have an account?
          <Link to="/registration"> Sign up</Link>
        </p>

      </div>

      <div className="login-right">
      </div>
    </div>
  );
};

export default Login;

