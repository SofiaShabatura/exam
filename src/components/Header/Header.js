import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo">coolors</div>

      <div className="header-actions">
        <button className="header-link">Tools</button>
        <button className="header-link1">Go Pro</button>
        <button className="header-link" onClick={() => navigate('/login')}>
          Sign in
        </button>
        <button
          className="header-btn"
          onClick={() => navigate('/registration')}
        >
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;
